'use strict';
const express = require('express');

const {addEmployee, editEmployee, deleteEmployee, getAllEmployees, getEmployee} = require('./mongoDbOps');

const router = express.Router();

router.route('/employee').post(addEmployee);
router.route('/employee/:id').put(editEmployee);
router.route('/employee/:id').get(getEmployee);
router.route('/employees').get(getAllEmployees);
router.route('/employee').delete(deleteEmployee);

module.exports = router;