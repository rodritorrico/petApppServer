const Express = require('./adapters/Express');
const Mongo = require('./adapters/Mongo');

const ServerRepository = require('./repositories/ServerRepository');
const DataBaseRepository = require('./repositories/DataBaseRepository');

var mongo = new Mongo('mongodb+srv://admin:admin@cluster0-bww9t.mongodb.net/test?retryWrites=true&w=majority','petApp');
var mongoConected = mongo.startConection();



mongoConected.then(()=>{
    let dataBaseRepository = new DataBaseRepository(mongo)
    let express = new Express(dataBaseRepository);
    let serverRepository= new ServerRepository(express);
    serverRepository.initializeServer(3000);

})
