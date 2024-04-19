var Employeedb = require('../model/model');

// create and save new employee
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new employee
    const employee = new Employeedb({
        id : req.body.id,
        name : req.body.name,
        department: req.body.department,
        salary : req.body.salary
    })

    // save employee in the database
    employee
        .save(employee)
        .then(data => {
            //res.send(data)
            res.redirect('/add-employee');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all employees/ retrive and return a single employee
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Employeedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found employee with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving employee with id " + id})
            })

    }else{
        Employeedb.find()
            .then(employee => {
                res.send(employee)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving employee information" })
            })
    }

    
}

// Update a new idetified employee by employee id
// controller.js

exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be empty" });
    }

    const id = req.body.id;
    Employeedb.findOneAndUpdate({ id: id }, req.body, { useFindAndModify: false }) // Change to findOneAndUpdate and specify the custom id field
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update employee with ID ${id}. Employee not found!` });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating employee information" });
        });
};

exports.delete = (req, res) => {
    const id = req.params._id; // Use req.params._id instead of req.params.id

    Employeedb.findOneAndDelete({ _id: id }) // Ensure that '_id' matches your custom ID field name
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete employee with id ${id}. Employee not found!` })
            } else {
                res.send({ message: "Employee was deleted successfully!" });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Could not delete employee with id=" + id });
        });
};