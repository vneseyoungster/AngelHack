const express = require('express');
const cors = require('cors');
const vision = require('@google-cloud/vision');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); // Ensure this line is present to parse JSON bodies

// Load the service account key JSON file
const keyFilename = '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/teak-catalyst-411606-788eeecd422e.json'; // Replace with your key file path
const client = new vision.ImageAnnotatorClient({ keyFilename });

// Function to ensure directories exist
const ensureDirectoryExistence = (dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  };
  


const downloadImage = async (url, imagePath) => {
  const response = await axios({
    url,
    responseType: 'stream',
  });
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(imagePath))
      .on('finish', () => resolve())
      .on('error', (e) => reject(e));
  });
};

app.post('/analyze-image', async (req, res) => {
  try {
    const imageUrl = req.body.imageUrl;

    // Define the local paths
    const imagesDir = path.join(__dirname, 'images');
    const resultsDir = path.join(__dirname, 'results');

    // Ensure directories exist
    ensureDirectoryExistence(imagesDir);
    ensureDirectoryExistence(resultsDir);

    // Define the local path to save the image
    const imagePath = path.join(imagesDir, `${Date.now()}.jpg`);
    
    // Download the image
    await downloadImage(imageUrl, imagePath);
    console.log(`Image saved to: ${imagePath}`);
    // Download the image
    await downloadImage(imageUrl, imagePath);

    // Perform text detection
    const [result] = await client.textDetection(imagePath);
    const detections = result.textAnnotations;

    const resultFilePath = path.join(__dirname, 'results', `${Date.now()}.json`);
    fs.writeFileSync(resultFilePath, JSON.stringify(detections, null, 2));
    console.log(`Result saved to: ${resultFilePath}`);

    res.json(detections);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing image');
  }
});

app.post('/send-message', async (req, res) => {
  const { userMessage, userId } = req.body;

  try {
    const { answer, job } = await triggerAPI(userMessage);
    console.log(`Trigger agent successfully by ${userId}`);
    console.log(`Answer: ${answer}`);

    res.send({ answer, job, userId });
  } catch (error) {
    console.error('Error triggering the agent:', error);
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
