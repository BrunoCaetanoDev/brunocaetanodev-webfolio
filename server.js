//Install express server
const express = require('express');
const path = require('path');
const enforce = require('express-sslify');


const app = express();

// Serve only the static files form the dist directory
app.use(enforce.HTTPS())
  .use(express.static(__dirname + '/dist/bruno-caetano-devfolio'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/bruno-caetano-devfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
