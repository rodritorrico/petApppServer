const MongoClient = require('mongodb').MongoClient;

class Mongo{
    constructor(url,dbName){
        this.url = url;
        this.dbName = dbName;
    }

    async startConection(){
        this.conection =  await MongoClient.connect(this.url,{ useNewUrlParser: true, useUnifiedTopology: true } );
        this.database = await this.conection.db(this.dbName);
        console.log('Mongo conection: stablished');
    }

    diconect(){
        this.conection.close();
    }

    registerObject(object,collectionName){
        let colection = this.database.collection(collectionName);
        return colection.insertOne(object);
    }

    async getList(collectionName){
        let collection = await this.database.collection(collectionName);
        let cursor = await coleccion.find({});
        let array = await cursor.toArray();
        return array;
    }

    deleteObject(object,collectionName){
        let consult = {name: object.name};
        let collection = this.database.collection(collectionName);
        return collection.deleteOne(consult);
    }

}

module.exports = Mongo;









