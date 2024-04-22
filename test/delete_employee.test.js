// Import necessary modules
const request = require('supertest');
const app = require('../server');

// Test suite for deleting an employee
describe('Deleting an employee', () => {
    // Test case for deleting an employee
    it('should delete an existing employee', async () => {
        // Send a request to delete an employee
        const response = await request(app)
            .delete('/api/employees/:id') // Update the endpoint as per your API
            .send({
                id: 202405 
            });

        // Assertion for successful deletion (status code 200)
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            message: 'Employee deleted successfully'
        }));
    });
});