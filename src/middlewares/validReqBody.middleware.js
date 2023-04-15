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

module.exports = {
  validUserBody
}