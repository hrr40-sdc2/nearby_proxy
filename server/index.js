const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const app = express();
const port = 80;

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port);
