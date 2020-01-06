const express = require('express');
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(bodyParser.text());
app.use(cors());


var serverPort = process.env.PORT || '3000';
app.set('port', serverPort);

class Express{

    constructor(){
      
    }

    async defineRoutes(){
    
        app.get("/hola",(request, response)=>{
            response.send('hola');
        })


    }

    async listenPort(port){
        app.listen(port,()=>{
            console.log("Listening port: " + port);
        })
    }

    async initializeServer(port){
        app.options('*',cors());
        this.defineRoutes();
        this.listenPort(port);
    }
}


module.exports = Express


