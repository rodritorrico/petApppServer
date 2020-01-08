class WebController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository;
    }

    getFeedTimes(request,response){
        let feedTimes  = 3; //TODO: get data from database;
        response.send(feedTimes.toString());
    }

    getPlatePercentage(request,response){
        let percentage = 10; //TODO get data from db and calculate
        response.send(percentage.toString());
    }

    giveFood(request,response){
        let giveFoodData = request.body;
        console.log(giveFoodData);
        // this.dataBaseRepository.saveObject({data: thingData},'ThingData');
        response.sendStatus(200);
    }
}

module.exports = WebController;