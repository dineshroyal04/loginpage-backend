import {MongoClient} from "mongodb";
//const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }

  // Connected successfully
  console.log("Connected to MongoDB");

  // Call the function to insert data here

  // Close the connection when done
  client.close();
});
// Assume you have a 'users' collection
const collection = client.db("your-database-name").collection("users");

// Data to insert
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 25,
};

// Insert one document
collection.insertOne(user, (err, result) => {
  if (err) {
    console.error("Error inserting document:", err);
    return;
  }

  console.log("Document inserted successfully:", result.insertedId);
});
const users = [
  { name: "Alice", email: "alice@example.com", age: 30 },
  { name: "Bob", email: "bob@example.com", age: 35 },
];

// Insert multiple documents
collection.insertMany(users, (err, result) => {
  if (err) {
    console.error("Error inserting documents:", err);
    return;
  }

  console.log("Documents inserted successfully:", result.insertedIds);
});
