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
}

module.exports = WebController;