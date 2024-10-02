import "../../styles/App.css";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import CameraAlt from "@mui/icons-material/CameraAlt";
import MarsImg from "@mui/icons-material/Public";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PodFilterImg from "@mui/icons-material/PhotoFilter";
import { Routes, Route, Link } from "react-router-dom";
import Pod from "../../views/Pod";
import Mars from "../../views/Mars"
import PodFilter from "../../views/PodFilter";

function Side() {

    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    }
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return(
        <div style={{display: "flex"}}>
            <Sidebar
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                backgroundColor="#4630a6"
                transitionDuration={500}
                rootStyles={{ border: 'none'}}
                style={{ height: "100vh"}}
            >
                <Menu className="menu">
                    {collapsed ? (
                        <MenuItem 
                            icon={<MenuOutlinedIcon /> }
                            onClick={handleCollapsedChange}
                            className="menu-item"
                        ></MenuItem>
                    ) : (
                        <MenuItem 
                            icon={<MenuOutlinedIcon /> }
                            onClick={handleCollapsedChange}
                            className="menu-item"
                        >
                            <div style={{ 
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign:"center",
                            }} >
                                I. Moyons
                            </div>
                        </MenuItem>
                    )}
                    <MenuItem 
                        icon={<CameraAlt/>} 
                        className="menu-item" 
                        component={<Link to="pod" className="link"/>}
                    >
                        Today's picture
                    </MenuItem>
                    <MenuItem 
                        icon={<PodFilterImg/>} 
                        className="menu-item" 
                        component={<Link to="podFilter" className="link"/>}
                    >
                        Filter POD
                    </MenuItem>
                    <MenuItem 
                        icon={<MarsImg/>} 
                        className="menu-item"
                        component={<Link to="mars" className="link"/>}
                    > 
                        Mars pictures 
                    </MenuItem>
                </Menu>                
            </Sidebar>
            <section>
                <Routes>
                    <Route path="/" element={<Pod/>} />   
                    <Route path="*" element={<Pod/>} />
                    <Route path="pod" element={<Pod/>} />
                    <Route path="podFilter" element={<PodFilter/>} />
                    <Route path="mars" element={<Mars/>} />
                </Routes>
            </section>
        </div> 
    );
};

export default Side;