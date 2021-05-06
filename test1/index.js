var server = require('./server.js');
var { route } = require('./router');
var { handle } = require('./requestHandler');


server.start(route, handle);
