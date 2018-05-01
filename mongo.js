var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://localhost/"+settings.db, function(err, client) {
    if (err) { return console.dir(err); }
    console.log("connected to DB!");
    const db = client.db('nodedb');
    db.collection("users", function(err, collection) {
      var docs = [
          {name: "taguchi", score: 40},
          {name: "fkoji", score: 80},
          {name: "dotinstall", score: 60}
      ];
      collection.insert(docs, function(err, result) {
        console.dir(result);
      });
    });
});