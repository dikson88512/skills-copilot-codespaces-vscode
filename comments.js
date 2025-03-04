// Create web server
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const commentsFilePath = 'comments.json';

// Function to read comments from file
function readComments() {
    if (fs.existsSync(commentsFilePath)) {
        const data = fs.readFileSync(commentsFilePath);
        return JSON.parse(data);
    }
    return [];
    
}

