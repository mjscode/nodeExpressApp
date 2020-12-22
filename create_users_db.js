var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
var users = ['Jacob','Will','Mark','Ben','Josh','Aron','Jesse','Irina','Sam','Katie','Lyla'];
var userDocs = createUsersDocs( users );

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("users").insertMany(userDocs, function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
// takes an array of users and converts them into an array of documents.
function createUsersDocs(userArray){
    for( i = 0; i < userArray.length ; i++ ){
        //creates random id between 100 and 199
        id = Math.floor((Math.random() * 200) + 100);
        userArray[i] = { "_id" : id, "name" : userArray[i] };
    }
    return userArray;
}