// What is MongoDB?
// MongoDB, a popular NoSQL database, uses a flexible and expressive query syntax called the MongoDB Query Language (MQL). 
// Here are a few query syntax examples:

db.users.find({ age: 25 })  //basic find query

db.users.find({ age: 25 }, { name: 1, _id: 0 }) //projection query

db.users.find({ age: { $gt: 30 } }) //comparison query

// Inserting Documents:
db.users.insertOne({ name: "John Doe", age: 30, email: "john@example.com" });

db.users.insertMany([
  { name: "Jane Smith", age: 35, email: "jane@example.com" },
  { name: "Mark Johnson", age: 28, email: "mark@example.com" },
]);

//Aggregation Pipeline:
db.users.aggregate([
  { $match: { age: { $gt: 30 } } },
  { $group: { _id: "$age", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 5 }
]);

//Deleting Documents:
db.users.deleteOne({ name: "Jane Smith" });
db.users.deleteMany({ age: { $lt: 30 } });

//Updating Documents:
db.users.updateOne({ name: "John Doe" }, { $set: { age: 31 } });

//Indexing:
db.users.createIndex({ name: 1 });
