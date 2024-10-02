const request = require('supertest');
const app = require('../api/index.js');

describe('API Endpoints', () => {
    it('GET / - should return a message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello from server!');
    });

    it('GET /apod - should return APOD data', async () => {
        const response = await request(app).get('/apod');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title');
        expect(response.body).toHaveProperty('url');
    });

    it('GET /apodDate - should return APOD data for a specific date', async () => {
        const date = '2024-01-01';
        const response = await request(app).get(`/apodDate?date=${date}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title');
    });

    it('GET /apodDate - should return 400 if date is not provided', async () => {
        const response = await request(app).get('/apodDate');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Date is required');
    });

    it('GET /mars - should return Mars photos', async () => {
        const date = '2024-01-01';
        const response = await request(app).get(`/mars?date=${date}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('photos');
    });

    it('GET /mars - should return 400 if date is not provided', async () => {
        const response = await request(app).get('/mars');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Date is required');
    });

    it('GET /mars - should return Mars photos with specific camera', async () => {
        const date = '2024-01-01';
        const camera = 'FHAZ';
        const response = await request(app).get(`/mars?date=${date}&camera=${camera}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('photos');
    });
});