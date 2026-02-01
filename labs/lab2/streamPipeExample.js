const fs = require('fs');

const readStream = fs.createReadStream('read_stream.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('write_pipe_stream.txt', { encoding: 'utf8' });

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Data has been piped successfully from read_stream.txt to write_pipe_stream.txt');
});