const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add employees
 *  @method GET /add-employee
 */
route.get('/add-employee', services.add_user)

/**
 *  @description for update employee
 *  @method GET /update-employee
 */
route.get('/update-employee', services.update_user)


// API
route.post('/api/employees', controller.create);
route.get('/api/employees', controller.find);
route.put('/api/employees/:id', controller.update);
route.delete('/api/employees/:id', controller.delete);


module.exports = route