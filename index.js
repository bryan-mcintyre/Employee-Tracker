const inquirer = require('inquirer')
const { Pool } = require('pg')
require('dotenv')

const pool = new Pool(
    {
        user: 'postgres',
        password: 'RowtheBoat',
        host: 'localhost',
        database: 'employee_tracker_db'
    },
    console.log('Connected to the database')
)
pool.connect()

inquirer.prompt([
    {
        message: "What would you like to do?",
        name: 'choice',
        type: 'list',
        choices: ['View all employees', 'Add employee', 'Update employee info', 'View all roles', 'Add role', 'View all departments', 'Add department']
    }
]).then((response) => {
    if (response.choice === 'View all employees') {
        viewAllEmployees()
    } else if (response.choice === 'Add employee') {
        addEmployee()
    } else if (response.choice === 'Update employee info') {
        updateEmployeeInfo()
    } else if (response.choice === 'View all roles') {
        viewAllRoles()
    } else if (response.choice === 'Add role') {
        addRole()
    } else if (response.choice === 'View all departments') {
        viewAllDepartments()
    } else if (response.choice === 'Add dpeartment') {
        addDepartment()
    } return
})

function viewAllEmployees(rows) {
    pool.query('SELECT * FROM employee', function (err, {rows}) {
        console.table(rows)
    })
}

function viewAllRoles() {
    pool.query('SELECT * FROM role', function (err, {rows}) {
        console.table(rows)
    })
}

function viewAllDepartments() {
    pool.query('SELECT * FROM department', function (err, {rows}) {
        console.table(rows)
    })
}

function addEmployee() {
    inquirer.prompt ([
        {
            message: 'What is their id?',
            name: 'id'
        },
        {
            message: 'What is the employees first name?',
            name: 'firstName'
        },
        {
            message: 'What is their last name?',
            name: 'lastName'
        },
        {
            message: 'What is their role id?',
            name: 'roleID'
        },

    ]).then((response) => {
        const id = response.id
        const firstName = response.firstName
        const lastName = response.lastName
        const roleID = response.roleID
        pool.query(`INSERT INTO employee (id, first_name, last_name, role_id) VALUES ($1, $2, $3, $4)`, [id, firstName, lastName, roleID])
    })
}

function addRole() {
    inquirer.prompt ([
        {
            message: 'What is the title of the role?',
            name: 'title'
        },
        {
            message: 'What is the salary for the role?',
            name: 'salary'
        },
        {
            message: 'What department does this role belong to?',
            name: 'department'
        }
    ]).then((response) => {
        const title = response.title
        const salary = response.salary
        const department = response.department

        pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)' [title, salary, department])
    })
}

function addDepartment() {
    inquirer.prompt ([
        {
            message: 'What is the name of the department?',
            name: 'department'
        }
    ]).then((response) => {
        const department = response.department

        pool.query('INSERT INTO department (name) VALUES ($1)' [department])
    })
}