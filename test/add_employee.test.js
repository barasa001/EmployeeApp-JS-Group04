import chai from 'chai';
const chaiHttp = require('chai-http');
const app = require('../server'); // Import Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Adding an employee', () => {
    it('should add a new employee', (done) => {
        chai.request(app)
            .post('/api/employees')
            .send({
                id: 123, // Provide test data for the new employee
                name: 'Test Name',
                department: 'IT',
                salary: 50000
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });
});
