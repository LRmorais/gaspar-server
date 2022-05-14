const express = require('express');

const app = express();

app.get('/deploy', (req, res) => {
  return res.status(200).json({message: 'Success! Servidor rodando na AWS'});
});

app.post('/deploy', (req, res) => {
  const {name, situation} = req.body;

  return res.json({name, situation})
})

app.listen(3333, () => {
  console.log('Rodando')
})