const Express = require('./adapter/Express');
const ServerRepository = require('./repository/ServerRepository');

let express = new Express();
let serverRepository= new ServerRepository(express);

serverRepository.initializeServer(3000);