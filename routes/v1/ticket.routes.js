const express = require('express');

const ticketController = require('../../src/controllers/tickets.controller');

const router = express.Router();

router
  .route('/')
  .get(ticketController.getTickets)
  .post(ticketController.createTicket)

router
  .route('/:id')
  .get(ticketController.getTicketsById)
  .put(ticketController.updateTicket)

module.exports = router