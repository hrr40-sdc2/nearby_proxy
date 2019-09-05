const express = require('express');
const path = require('path');
const app = express();
const port = 3747;

// Middlewares
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
