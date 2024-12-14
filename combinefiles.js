const fs = require('fs');
const path = require('path');

// List of files to combine
const filesToCombine = ['notes.js', 'app.js', 'notes.json', 'index.html', 'server.js'];

// Output file
const outputFile = 'combined_temp.txt';

// Function to combine files with headers
const combineFiles = () => {
    // Initialize or clear the output file
    fs.writeFileSync(outputFile, '', 'utf8');

    filesToCombine.forEach((file) => {
        const filePath = path.join(__dirname, file);
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const header = `===== ${file} =====\n`;
            fs.appendFileSync(outputFile, header, 'utf8');
            fs.appendFileSync(outputFile, content + '\n\n', 'utf8');
            console.log(`Added ${file} to ${outputFile}`);
        } catch (err) {
            console.error(`Error reading ${file}:`, err);
        }
    });

    console.log(`All files have been combined into ${outputFile}`);
};

combineFiles();