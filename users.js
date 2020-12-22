var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getUsers = function(callback) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("users").find({}).toArray( function(err, result) {
            if (err) throw err;
            db.close();
            callback(err,result)
          });
      });
}