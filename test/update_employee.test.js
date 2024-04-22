// Import necessary modules
const request = require('supertest');
const app = require('../server');

// Test suite for updating an employee
describe('Updating an employee', () => {
    // Test case for updating an employee
    it('should update an existing employee', async () => {
        // Send a request to update an employee
        const response = await request(app)
            .put('/api/employees/:202403')
            .send({
                id: 202403,
                name: 'Marvin Ogore',
                department: 'HR',
                salary: 50000
            });

        // Assertion for successful update (status code 200)
        expect(response.statusCode).toBe(200);
        // Assertion for the updated employee data
        expect(response.body).toEqual(expect.objectContaining({
            id: 202403,
            name: 'Marvin Ogore',
            department: 'HR',
            salary: 50000
        }));
    });
});