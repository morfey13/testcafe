const EventEmitter = require('events').EventEmitter;

class TestCompleteWatcher extends EventEmitter {
    contructor () {
    }
}

module.exports = {
    watcher: new TestCompleteWatcher()
};