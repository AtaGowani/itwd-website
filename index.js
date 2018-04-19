const express = require('express');
const app = express();
const path = require('path');

app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

// Hack to get around with using Angular's routes
app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(__dirname + '/index.html');
});

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});