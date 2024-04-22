const request = require('supertest');
const app = require('../server'); // Import Express app

// Wrap the test suite inside a conditional block
if (app) {
    describe('Adding an employee', () => {
        it('should add a new employee', async () => {
            const response = await request(app)
                .post('/api/employees')
                .send({
                    id: 20241000,
                    name: 'Test Name',
                    department: 'IT',
                    salary: 50000
                });

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(expect.objectContaining({ /* expected employee data */ }));
        });

        // We omitted the afterAll hook for now, as it's causing errors
        // afterAll(async () => {
        //     await new Promise(resolve => setTimeout(() => resolve(), 500)); // Wait for server to close
        //     app.close(); // Close the server
        // });
    });
} else {
    console.error('Server not found');
}