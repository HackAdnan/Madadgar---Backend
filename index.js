const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EventModel = require('./models/casedetails');

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/case', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.post('/reportCase', (req, res) => {
  const eventData = req.body;
  EventModel.create(eventData)
      .then(event => res.json(event))
      .catch(err => res.status(400).json(err));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});