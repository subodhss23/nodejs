/**Pipes and pipe chaining */

const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./app.js', 'utf8');
const writeStream = fs.createWriteStream('copyApp.js.gz')
readStream.pipe(gzip).pipe(writeStream);