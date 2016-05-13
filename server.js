const express = require('express');
const app = express();

const port = 2389;

app.get('/', (req, res) => res.send('Hello, there! Try visiting <a href="secret">the secret</a> data.'));

app.get('/secret', (req, res) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).send('You need a token! Send one as the HTTP header "X-Token".');
  }

  if (token !== 'give me access plz') {
    return res.status(401).send('Wrong token!');
  }

  return res.send({
    classification: 'TOP SECRET',
    content: 'THIS IS A TOP SECRET MESSAGE OMG.'
  });
});

app.listen(port, () => console.log('listening on port', port));
