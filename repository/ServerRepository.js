class ServerRepository{
    constructor(server){
        this.server = server;
    }

    initializeServer(port){
        this.server.initializeServer(port);
    }
}


module.exports = ServerRepository;

