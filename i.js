import express from "express";
//import cors from "cors";
//import mongoose from "mongoose";
import mongodb from "mongodb";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());

//const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const objectId = mongodb.ObjectId;
const databaseName = "dinesh";
const connectionUrl = "mongodb://localhost:27017";
MongoClient.connect(
  connectionUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log(err);
    } else {
      const db = client.db(databaseName);
      if (db) {
        console.log(db);
      }
      db.collection("login").insertOne(
        { username: "admin", password: "admin" },

        (err, result) => {
          if (err) {
            console.error(err);
          }
          console.log(result);
        }
      );
    }
  }
);

// const client = mongoose
//   .connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the database");
//     const database = client.db("myLogin");
//     const collection = database.collection("dinesh");
//     collection.insertOne({ key: "value" }, (insertErr, result) => {
//       if (insertErr) {
//         console.error("Error inserting document:", insertErr);
//         return;
//       }
//       console.log("Document inserted successfully:", result.insertedId);
//     });
//     client.close();
//   });
//   .catch((error) => {
//     console.error("Error connecting to the database:", error.message);
//   });

//routes
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});



app.listen(9002, () => {
  console.log("Server is running on port 9002");
});
