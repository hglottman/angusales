
let connect = require('../dataAccess');
let company = require('./company');
var Sequelize = require('sequelize');


class CustomerModel {

    constructor() {

        this.customer = connect.define('customer', {
            customerId: { type: Sequelize.INTEGER, primaryKey: true },
            firstName: { type: Sequelize.STRING },
            lastName: { type: Sequelize.STRING },
            companyId: { type: Sequelize.INTEGER, references: { model: company, key: 'companyId' } },
            email: { type: Sequelize.STRING },
            phone: { type: Sequelize.INTEGER }
        }, {
                freezeTableName: { type: true }//ntice,add this as adittional object 
            });
    }

    getAllCustomers() {
        return this.customer.findAll();
    }

    getCustomer(customerId) {
        return this.customer.findOne({
            where: {
                customerId: customerId
            }
        })
    }

    createCustomer(newCustomer) {
        console.log(newCustomer)
        return this.customer.create({
            customerId: null,
            firstName: newCustomer.firstName,
            lastName: newCustomer.lastName,
            companyId: newCustomer.companyId,
            email: newCustomer.email,
            phone: newCustomer.phone
        });
    }

    updateCustomer(customerId, customerToUpdate) {
        return this.customer.update(customerToUpdate, {
            where: {
                customerId: customerId
            }
        }).then((req, res) => {
            return this.getCustomer(customerId);
        })
        err => {
            console.error(err)
        }
    }

    deleteCustomer(customerId) {
        return this.customer.destroy({
            where: {
                customerId: customerId
            }
        }).then((req, res) => {
            return this.getAllCustomers();
        })
        err => {
            console.error(err)
        }
    }
}




var customer = new CustomerModel();
module.exports = customer;