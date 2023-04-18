const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

require('./proxy')(app);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

app.get('/env', (req, res) => {
  res.send(process.env.YELP_API_KEY);
});