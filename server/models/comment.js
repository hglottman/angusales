
let connect = require('../dataAccess');
let customer = require('./customer');
var Sequelize = require('sequelize');


class CommentModel {

    constructor() {

        this.comment = connect.define('comment', {
            commentId: { type: Sequelize.INTEGER, primaryKey: true },
            customerId: { type: Sequelize.INTEGER, references: { model: customer, key: 'customerId' } },
            commentText: { type: Sequelize.STRING }
        }, {
                freezeTableName: { type: true }//ntice,add this as adittional object 
            });
    }

    getAllComments() {
        return this.comment.findAll().then(data => {
            return data;
        }, err => {
            console.error(err)
        });
    }

}


var comment = new CommentModel();
module.exports = comment;