const { request: req, response: res } = require('express');

module.exports = {
  serverErr: (err) => {
    console.log('Error in server : ', err)
    return res.status(500).send(JSON.stringify({
      status: 'fail',
      message: 'Error in server'
    }))
  }
}