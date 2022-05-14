const express = require('express');

const app = express();

app.get('/deploy', (req, res) => {
  return res.status(200).json({message: 'Success! Servidor rodando na AWS'});
});

app.listen(3000, () => {
  console.log('Rodando')
})