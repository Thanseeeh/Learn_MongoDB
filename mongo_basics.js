// What is MongoDB?
// MongoDB, a popular NoSQL database, uses a flexible and expressive query syntax called the MongoDB Query Language (MQL). 
// Here are a few query syntax examples:

db.users.find({ age: 25 })  //basic find query

db.users.find({ age: 25 }, { name: 1, _id: 0 }) //projection query

db.users.find({ age: { $gt: 30 } }) //comparison query
