const constants = require('../utils/constants');

function validUserBody(req, res, next) {
  if (
    !req.body.name
    || !req.body.email
    || !req.body.userId
    || !req.body.password
  ) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Please enter valid fields'
    }))
  } else next();
}

async function validateTicketRequestBody(req, res, next) {

  if (!req.body.title) {
    res.status(400).send({
      message: "Failed! Title not provided"
    })
    return;
  }

  if (!req.body.description) {
    res.status(400).send({
      message: "Failed! Description not provided"
    })
    return;
  }

  next();
};

async function validateTicketStatus(req, res, next) {

  const status = req.body.status;
  const statusTypes = [constants.ticketStatus.open, constants.ticketStatus.closed, constants.ticketStatus.inProgress,
  constants.ticketStatus.blocked]
  if (status && !statusTypes.includes(status)) {
    res.status(400).send({
      message: "status provided is invalid. Possible values CLOSED | BLOCKED | IN_PROGRESS | OPEN"
    })
  }

  next();
}

module.exports = {
  validUserBody,
  validateTicketRequestBody,
  validateTicketStatus
}