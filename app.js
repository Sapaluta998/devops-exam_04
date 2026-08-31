const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let activities = [];

// Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Get all activities
app.get('/api/activities', (req, res) => {
  res.json(activities);
});

// Add new activity
app.post('/api/activities', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const activity = {
    id: activities.length + 1,
    title,
    description,
    timestamp: new Date().toISOString()
  };
  
  activities.push(activity);
  res.status(201).json(activity);
});

// Delete activity
app.delete('/api/activities/:id', (req, res) => {
  const id = parseInt(req.params.id);
  activities = activities.filter(a => a.id !== id);
  res.json({ message: 'Activity deleted' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Activity Logger app listening at http://localhost:${port}`);
});
