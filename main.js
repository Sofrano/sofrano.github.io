var path = 'worker.js';

var worker = new Worker(path);

worker.onmessage = function (event) {
    locListener.onSubmit({
        'first_name': 'Davin',
        'last_name': 'Ahn',
        'mail': 'davin.ahn@ridi.com',
    });
    console.log('Message:' + JSON.stringify(event.data));
};

console.log('Initialized by path: ' + path);

function log(message) {
    alert(message);
}
