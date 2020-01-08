const express = require('express');
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(bodyParser.text());
app.use(cors());




class Express{

    constructor(dataBase){
        this.userWantsToFeedPet = false;
        this.dataBase = dataBase;
    }

    async defineRoutes(){
    
        app.get("/hola",(request, response)=>{
            response.send('hola');
        })

        app.get('/feedPet',(request, response)=>{
            if(this.userWantsToFeedPet){
                response.send(true);
            }else{
                response.send(false);
            }
        })

        app.post('/thingData', (request, response)=>{
            let thingData = request.body;
            this.dataBase.registerObject({data: thingData},'thingData');
            response.sendStatus(200);
        })


    }

    async listenPort(port){
        app.set('port', port);
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


