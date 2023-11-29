const fs = require('fs');
const path = require('path');


// Check command-line arguments
if (process.argv.length !== 3) {
    console.error('Usage: node countFiles.js <directory>');
    process.exit(1);
}

const directory = process.argv[0];

// Read the directory
fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    // Filter for specific file extension (e.g., .txt)
    const fileExtensionToCount = '.txt';
    const matchingFiles = files.filter((file) =>
        file.endsWith(fileExtensionToCount)
    );

    console.log(`Number of ${fileExtensionToCount} files: ${matchingFiles.length}`);
});