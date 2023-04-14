const db = {};

const { userModel } = require('./users.model');
const { ticketModel } = require('./tickets.model');

db.users = userModel;
db.tickets = ticketModel;

module.exports = { db }