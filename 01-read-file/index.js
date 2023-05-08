const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

emitter.on('read', () => {
    const myPath = path.join(__dirname, 'text.txt');
    const stream = fs.createReadStream(myPath, "utf-8");
    stream.read();
    stream.on('data', data => console.log(data));
});

emitter.emit('read');






