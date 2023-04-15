const { db } = require('../models/index.model');

class TicketService {
  schema;
  constructor() {
    this.schema = db.tickets
  }

  createTicket(ticket) {
    return this
      .schema
      .create(ticket)
  }

  getAllTicket(queryObj) {
    return this
      .schema
      .find(queryObj)
  }

  getTicketById(id) {
    return this
      .schema
      .findOne({ _id: id })
  }

  updateTicket(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update)
  }
}

const ticketService = new TicketService();

module.exports = { ticketService }