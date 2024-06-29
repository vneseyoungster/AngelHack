const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS package
const triggerAPI = require('./services/triggerAPI'); // Adjust the path as necessary
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Use the CORS middleware
app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { userMessage, userId } = req.body;

  try {
    const { answer, job } = await triggerAPI(userMessage);
    console.log(`Trigger agent successfully by ${userId}`);
    console.log(`Answer: ${answer}`); // Display the answer on the console

    res.send({ answer, job, userId });
  } catch (error) {
    console.error('Error triggering the agent:', error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
