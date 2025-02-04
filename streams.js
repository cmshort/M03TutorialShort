const fs = require('fs');

// read stream
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

// write stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK ------');
//     console.log(chunk);

//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping - must be from readable stream to writable stream
readStream.pipe(writeStream);
