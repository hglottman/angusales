let connect = require('../dataAccess');
var Sequelize = require('sequelize');



class CompanyModel {

    constructor() {

        this.company = connect.define('company', {
            companyId: { type: Sequelize.INTEGER, primaryKey: true },
            companyName: { type: Sequelize.STRING },
            adrress: { type: Sequelize.STRING },
            country: { type: Sequelize.STRING },
        }, {
                freezeTableName: { type: true }//ntice,add this as adittional object 
            });
    }

    getAllCompanys() {
        return this.company.findAll().then(data => {
            return data;
        }, err => {
            console.error(err)
        });
    }

    createCompany(newCompany) {
        return this.company.create({
            companyId: null,
            companyName: newCompany.companyName,
            adrress: newCompany.adrress,
            country: newCompany.country
        })
    }

}



var company = new CompanyModel();
module.exports = company;
