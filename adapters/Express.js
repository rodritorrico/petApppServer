const Mongo = require('./Mongo');
const express = require('express');
let app = express();

app.use(bodyParser.json());

const cors = require('cors');
app.use(bodyParser.text());
app.use(cors());


class Express{

    constructor(dataBase){
      this.userWantsToFeedPet = false;
      this.dataBase = dataBase;
      this.feedTimes = 0;
      this.percentage = 10;
    }

    async defineRoutes(){
        
        app.get('/feedPet',(request, response)=>{
            if(this.userWantsToFeedPet){
                response.send(true);
            }else{
                response.send(false);
            }
        })

        app.post('/thingData', (request, response)=>{
            let thingData = request.body;
            this.dataBase.registerObject({data: thingData},'ThingData');
            response.sendStatus(200);
        })

        app.get('/getFeedTimes', (request, response)=>{
            response.send(this.feedTimes.toString());
        })

        app.get('/getPlatePercentage', (request, response) =>{
            response.send(this.percentage.toString());
        })

        app.post('/giveFood', (request,response)=>{
            let giveFoodData = request.body;
            console.log(giveFoodData);
            // this.userWantsToFeedPet =true;
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


