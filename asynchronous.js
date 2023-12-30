const axios = require("axios");

async function downloadContentsFromUrls(urls) {
  try {
    const downloadedContents = await Promise.all(
      urls.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      })
    );

    return downloadedContents;
  } catch (error) {
    console.error("Error downloading contents:");
    throw error;
  }
}

const urls = [
  "https://simple-books-api.glitch.me/books",
  "https://jsonplaceholder.typicode.com/users",
];

downloadContentsFromUrls(urls)
  .then((contents) => {
    console.log("Downloaded contents:", contents);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
