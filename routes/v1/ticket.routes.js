const express = require('express');

const ticketController = require('../../src/controllers/tickets.controller');
const authValidator = require('../../src/middlewares/auth.middleware');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');

const router = express.Router();

router
  .route('/')
  .get(authValidator.verifyToken, ticketController.getTickets)
  .post([authValidator.verifyToken, validReqBody.validateTicketRequestBody], ticketController.createTicket)

router
  .route('/:id')
  .get(authValidator.verifyToken, ticketController.getTicketsById)
  .put([authValidator.verifyToken, validReqBody.validateTicketStatus], ticketController.updateTicket)

module.exports = router