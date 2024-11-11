console.log("--index--");

const logEvent = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('logs', (message) => {
  logEvent(message);
});

myEmitter.emit('logs','saved text'); 