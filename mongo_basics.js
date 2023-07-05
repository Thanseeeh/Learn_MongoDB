//  What is MongoDB?
//  MongoDB is a popular open-source document-oriented NoSQL (non-relational) database management system. It is designed to store, retrieve, and manage
//  large volumes of structured and unstructured data. MongoDB is known for its flexibility, scalability, and ease of use.

db.createCollection("posts")  //creating collection

//insertOne
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})

//insertMany
db.posts.insertMany([  
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])

db.posts.find()   //view all documents
db.posts.findOne()    //view first document that matches the query
db.posts.findOne({likes: 4}) //this will return the matching query that written in the object
db.posts.find({}, {title: 1, date: 1})  //the second object is projection. we can specify the fields needed.
db.posts.find({}, {_id: 0, title: 1, date: 1}) //this will exclude id and include title and date. but can't include 1 and 0 for common fields

//updateOne operation
db.posts.updateOne(
  {title: "Post Title 1"},
  {$set: {likes: 3}}
)

//updateMany operation
db.posts.updateMany(
  {},
  {$inc: {likes: 1}}
)

//if you would like to insert the document if it is not found, you can use the upsert option.
db.posts.updateOne( 
  { title: "Post Title 5" }, 
  {
    $set: 
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  }, 
  { upsert: true }
)

//deleteOne operation
db.posts.deleteOne({ title: "Post Title 5" })

//deleteMany operation
db.posts.deleteMany({ category: "Technology" })

//Find documents with a specific tag
db.posts.find({ tags: "news" })

//Find documents with a likes count greater than 2
db.posts.find({ likes: { $gt: 2 } })

//Sort documents by date in descending order
db.posts.find().sort({ date: -1 })

//Count the number of documents in the collection
db.posts.countDocuments()

//Limit the number of documents returned
db.posts.find().limit(5)