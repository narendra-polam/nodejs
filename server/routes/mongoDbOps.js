const employee = require('../model/mongo')

module.exports = {
    addEmployee: async function (req, res) {
        try {
            const obj = new employee({
                "name": req.body.name,
                "salary": req.body.salary,
                "age": req.body.age
            });
            res.json(await obj.save())
        } catch (err) {
            res.send('error ')
        }
    },

    editEmployee: async function (req, res) {
        try {
            const data = await employee.findById(req.params.id);
            data.salary = req.body.salary;
            data.age = req.body.age;
            data.name = req.body.name;

            res.json(await data.save())
        } catch (err) {
            res.send('error ', err)
        }
    },

    getEmployee: async function (req, res) {
        try {
            const data = await employee.findById(req.params.id);
            res.status(200).send(data);

        } catch (err) {
            res.send('error ')
        }
    },

    getAllEmployees: async function (req, res) {
        try {
            const data = await employee.find();
            res.status(200).send(data);

        } catch (err) {
            res.send('error ')
        }
    },

    deleteEmployee: async function (req, res) {
        try {
            const data = await employee.findOne();
            res.status(200).send(data);

        } catch (err) {
            res.send('error ')
        }
    }

}