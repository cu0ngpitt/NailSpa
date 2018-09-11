const express = require('express');
const app = express();

const path = require('path');

// for local port
// const port = 3000;

const PORT = process.env.PORT || 3000;        //local port configured for heroku

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
