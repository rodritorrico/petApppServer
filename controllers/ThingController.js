class ThingController{
    constructor(dataBaseRepository){
        this.dataBaseRepository = dataBaseRepository;
    }   

    feedPet(request,response) {
        let userWantsToFeedPet = false; //TODO: read from data base
        if(userWantsToFeedPet){
            response.send(true);
        }else{
            response.send(false);
        }
    }

    registerData(request,response) {
        let thingData = request.body;
        this.dataBaseRepository.saveObject({data: thingData},'ThingData');
        response.sendStatus(200);
    }
}

module.exports = ThingController;