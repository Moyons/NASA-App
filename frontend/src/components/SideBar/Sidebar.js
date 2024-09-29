import "../../App.css";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import CameraAlt from "@mui/icons-material/CameraAlt";
import Mars from "@mui/icons-material/Public";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// #141b2d

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
        <div>
            <Sidebar
                backgroundColor="#4630a6"
                rootStyles={{ border: 'none'}}
                style={{ height: "100%", position: "absolute"}}
                toggled={toggled}
                collapsed={collapsed}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
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
                                textAlign:"center",
                            }} >
                                I. Moyons
                            </div>
                        </MenuItem>
                    )}
                    <hr/>
                    <MenuItem icon={<CameraAlt/>} className="menu-item">Picture of the Day</MenuItem>
                    <MenuItem icon={<Mars/>} className="menu-item"> Mars pictures </MenuItem>
                </Menu>                
            </Sidebar>
        </div>
        
    );
}

export default Side;