const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App 4.0.1'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Kevin DA ROCHA',
      age: 23,
    },
    {
      name: 'Gaelle CROIZAT',
      age: 21,
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
