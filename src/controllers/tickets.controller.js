const { ticketService } = require('../services/tickets.service');
const { userService } = require('../services/users.service');
const constants = require('../utils/constants');
const { serverErr } = require('../utils/errorHandler');
const { sendMail } = require('../utils/notification');

async function createTicket(req, res) {
  const ticket = req.body;

  ticket.reporter = req._id;

  const user = await userService.getUserById(req._id);

  //finding engineer to assign
  const assignee = await userService.findOneByQuery({
    userType: constants.userTypes.engineer,
    userStatus: constants.userStatus.approved
  })

  ticket.assignee = assignee._id

  return await ticketService
    .createTicket(ticket)
    .then(async (data) => {
      console.log(data);

      await sendMail(`Hi ${user.name}, your ticket #${data._id} has been raised!`, JSON.stringify({
        data
      }), [user.email, assignee.email]);

      res.status(200).send(JSON.stringify({
        status: 'success',
        message: `New ticket has been raised to ${assignee.name}`,
        ticket: data
      }))
    })
    .catch(err => serverErr(err))
}

async function getTickets(req, res) {
  let queryObj = {};

  const user = await userService.getUserById(req._id);

  if (user.userType === constants.userTypes.engineer && user.userStatus === constants.userStatus.approved) {
    queryObj = { $or: [{ assignee: req._id }, { requestor: req._id }] };
  } else if (user.userType === constants.userTypes.customer) {
    queryObj.reporter = req._id;
  } else if (user.userType === constants.userTypes.admin && user.userStatus === constants.userStatus.approved) {
    queryObj = {};
  } else {
    return res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'You are not authorized'
    }))
  }

  if (req.query.status != undefined) queryObj.status = req.query.status;

  return await ticketService
    .getAllTicket(queryObj)
    .then(async (data) => {
      console.log(data);
      if (!data || data.length === 0) {
        return res.status(404).send(JSON.stringify({
          status: 'fail',
          message: 'No Ticket data available'
        }))
      }

      return res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Tickets fetched successfully',
        tickets: data
      }))
    })
    .catch(err => serverErr(err))
}

async function getTicketsById(req, res) {
  const ticketId = req.params.id;

  try {
    const ticket = await ticketService.getTicketById(ticketId);
    const user = await userService.getUserById(req._id);

    if (!ticket || ticket.length === 0) {
      return res.status(404).send(JSON.stringify({
        status: 'fail',
        message: 'No such ticket exist'
      }))
    }

    if (
      user.userStatus !== constants.userStatus.approved
      || (user.userType === constants.userTypes.engineer &&
        (ticket.assignee !== user._id && ticket.reporter !== user._id)
      )
      || (user.userType === constants.userTypes.customer &&
        ticket.reporter !== user._id
      )
    ) {
      return res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'You are not authorized'
      }))
    }

    return res.status(200).send(JSON.stringify({
      status: 'success',
      message: 'Ticket fetched successfully',
      ticket: ticket
    }))
  }
  catch (err) {
    serverErr(err);
  }
}

async function updateTicket(req, res) {
  const ticketId = req.params.id;
  let update = {};
  update.ticketPriority = req.body.ticketPriority;
  update.status = req.body.status;


  try {
    const ticket = await ticketService.getTicketById(ticketId);
    const user = await userService.getUserById(req._id);

    const assignee = await userService.getUserById(ticket.assignee);

    if (!ticket || ticket.length === 0) {
      return res.status(404).send(JSON.stringify({
        status: 'fail',
        message: 'No such ticket exist'
      }))
    }

    if (
      user.userStatus !== constants.userStatus.approved
      || user.userType === constants.userTypes.customer
    ) {
      return res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'Unauthorize access'
      }))
    }

    if (
      user.userType === constants.userTypes.engineer
      && (ticket.assignee !== user._id && ticket.reporter !== user._id)
    ) {
      return res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'You are not allowed to change this ticket'
      }))
    }

    return await ticketService
      .updateTicket(ticketId, update)
      .then(async (data) => {
        console.log(data);

        await sendMail(`Hi ${user.name}, the ticket #${data._id} has been updated!`, JSON.stringify({
          data
        }), [user.email, assignee.email]);

        return res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'Ticket updated successfully',
          data: data
        }))
      })
  }
  catch (err) {
    serverErr(err)
  }
}

module.exports = {
  createTicket,
  getTickets,
  getTicketsById,
  updateTicket
}