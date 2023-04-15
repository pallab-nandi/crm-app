const v1Routes = require('./v1/api.routes');

module.exports = (app) => {
  app.use('/api/v1', v1Routes);

  app.use('*', (req, res) => {
    res.status(404).send(JSON.stringify({
      status: 'fail',
      message: '404 Error! Page not found'
    }))
  })
}