const v1Routes = require('./v1/api.routes');
const path = require('path');

module.exports = (app) => {
  app.use('/api/v1', v1Routes);

  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../src/public/index.html'));
  });

  app.use('*', (req, res) => {
    res.status(404).send(JSON.stringify({
      status: 'fail',
      message: '404 Error! Page not found'
    }))
  })
}