const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

// Middlewares
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
