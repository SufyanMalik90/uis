const fs = require("fs");
const path = require("path");

function listFilesWithExtension(directoryPath, fileExtension) {
  try {
    const files = fs.readdirSync(directoryPath);
    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${fileExtension}`
    );
    return filteredFiles;
  } catch (error) {
    console.error("Error listing files:", error.message);
    throw error;
  }
}

const directoryPath = 'files';
const fileExtension = 'txt';

try {
  const filesWithExtension = listFilesWithExtension(
    directoryPath,
    fileExtension
  );
  console.log(`Files with .${fileExtension} extension:`, filesWithExtension);
} catch (error) {
  console.error("Failed to list files:", error.message);
}
