// require the rest of the app that needs to be transpiled after the hook
require('babel-core/register');

import http from 'http';

import app from 'server/app';

http.createServer(app.callback()).listen(3000);
