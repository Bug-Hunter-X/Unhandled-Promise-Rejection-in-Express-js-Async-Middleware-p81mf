const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously and handle potential errors
  setTimeout(async () => {
    try {
      // Simulate an error after a delay
      if (data.value > 100) {
        throw new Error('Value too high');
      }
      console.log('Processed:', data);
      res.send('Data received');
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(500).send('Error processing data');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));