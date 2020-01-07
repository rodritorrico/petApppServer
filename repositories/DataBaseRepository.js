class DataBaseRepository {
    constructor(bd){
        this.bd = bd;
    }

    saveObject(object,collection){
        return this.bd.registerObject(object,collection);
    }

    async getLsit(collection){
        let list = await this.bd.getList(collection);
        return list;
    }

    deleteObject(object,collecntion){
        return this.bd.deleteObject(object,collecntion);
    }
}

module.exports = DataBaseRepository;

