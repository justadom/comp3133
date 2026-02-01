const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'read_stream.txt');
// Create a readable stream
// const readStream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 16 });
const readStream = fs.createReadStream(filePath);

// Handle 'data' event
readStream.on('data',(chuck)=>{
    console.log('--- New Chunk ---');
    console.log(chuck);
});

// Handle 'end' event
readStream.on('end',()=>{
    console.log('No more data to read.');
});
// Handle 'error' event
readStream.on('error',(err)=>{
    console.error('Error reading the file:', err);
});

// Pause the stream after 100ms
setTimeout(() => {
    console.log('Pausing the stream...');
    readStream.pause();
}, 100);

// Resume the stream after another 2 seconds
setTimeout(() => {
    console.log('Resuming the stream...');
    readStream.resume();
}, 2100);