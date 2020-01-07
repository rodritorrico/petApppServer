const express = require('express');
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(bodyParser.text());
app.use(cors());


let serverPort = process.env.PORT || '3000'; 
app.set('port', serverPort);

let ThingController = require('../controllers/ThingController');
let WebController = require('../controllers/WebController');
class Express{

    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository;
    }


    async defineThingRoutes(){
        let thingController =  new ThingController(this.dataBaseRepository);
    
        app.get('/feedPet',(request, response)=>{
            thingController.feedPet(request,response);
        })

        app.post('/thingData', (request, response)=>{
            thingController.registerData(request,response);
        })

    }

    async defineWebRoutes(){
        let webController = new WebController(this.dataBaseRepository);

        app.get('/getFeedTimes', (request, response)=>{
            webController.getFeedTimes(request,response);
        })

        app.get('/getPlatePercentage', (request, response) =>{
            webController.getPlatePercentage(request,response);
        })

    }

    async listenPort(port){
        app.listen(serverPort,()=>{
            console.log("Listening port: " + serverPort);
        })
    }

    async initializeServer(port){
        app.options('*',cors());
        this.defineThingRoutes();
        this.defineWebRoutes();
        this.listenPort(port);
    }
}


module.exports = Express


