require("dotenv").config();
const express = require('express');
const multer = require('multer');
const TextModel = require("../model/test");

const app = express();
const port = process.env.PORT || 8080;

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Set up your routes
app.get('/', (req, res) => {
  res.send('Welcome to the file upload app!');
});

app.post('/api/upload', upload.single('textFile'), async (req, res) => {
  try {
    const fileContent = req.file.buffer.toString();
    const newText = new TextModel({ content: fileContent });
    await newText.save();
    res.send('File uploaded and content saved to MongoDB Atlas.');
  } catch (error) {
    res.status(500).send('Error uploading file.');
  }
});

module.exports = app;

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
