const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	
  //object destructuring js
  const { url } = req;

  // Get the current time
  const currentTime = new Date().toISOString();

  // Create the log message with time and URL
  const logMessage = `[${currentTime}]  ${url}\n`;

  // Append the log message to the requests.txt file
  //add try catch here
  const logFilePath = path.join(__dirname, 'requests.txt');
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error appending to requests.txt:', err);
    }
  });

  // Send a response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Request logged successfully!');
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
