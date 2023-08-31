// Connect to MongoDB using provided URL
const mongoose = require("mongoose");
const dbConnectionURL = process.env.MONGODB_URI;

mongoose.connect(dbConnectionURL)
.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch((err) => {
    console.log(err)
    console.log("Error connecting to MongoDB");
});

// Define chat schema
const TextSchema  = new mongoose.Schema({
    content: String,
});

// Create Chat model from schema
const TextModel = mongoose.model("Text", TextSchema);
module.exports = TextModel;