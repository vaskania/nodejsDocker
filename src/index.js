const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Docker is easy' });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listenin on https://localhost:${port}`)
);
