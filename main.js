const Express = require('./adapters/Express');
const ServerRepository = require('./repositories/ServerRepository');
const Mongo = require('./adapters/Mongo');

var mongo = new Mongo('mongodb+srv://admin:admin@cluster0-bww9t.mongodb.net/test?retryWrites=true&w=majority','petApp');
var mongoConected = mongo.startConection();



mongoConected.then(()=>{
    let express = new Express(mongo);
    let serverRepository= new ServerRepository(express);
    var serverPort = process.env.PORT || '3000';
    serverRepository.initializeServer(serverPort);

})
