const fs = require('fs');

const imagePath = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(imagePath);
  response.end();
};

module.exports.getSpongegar = getSpongegar;
