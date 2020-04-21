var path = 'worker.js';

var worker = new Worker(path);

worker.onmessage = function (event) {
    log('Message:' + JSON.stringify(event.data));
};

log('Initialized by path: ' + path);

function log(message) {
    alert(message);
}
