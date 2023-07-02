/*
what are the differences between sql and no-sql databases?

SQL (Structured Query Language) and NoSQL (Not Only SQL) are two broad categories of databases, and they differ in their data models, 
query languages, and overall design. Here are the main differences between them:
1. Data Model:
   - SQL databases are relational databases that use a tabular schema, where data is organized into tables with rows and columns.
    Each row represents a record, and each column represents a specific attribute of the data.
   - NoSQL databases, on the other hand, use various data models such as key-value pairs, document-based (JSON-like), column-family,
    and graph-based structures. These data models allow more flexible and dynamic data representation.
2. Schema:
   - SQL databases have a fixed schema, meaning the structure of the tables and the types of data they store are defined in advance.
    Any changes to the schema require altering the table, which can be a complex and time-consuming process.
   - NoSQL databases typically have a dynamic schema, also known as a schemaless design. This means that different records in the same collection
    or table can have different sets of fields, allowing for easy and fast modifications to the data model without requiring downtime or schema changes.
3. Query Language:
   - SQL databases use the SQL language to interact with the data. SQL is a powerful and standardized language that allows users to query,
    insert, update, and delete data using a set of predefined commands.
   - NoSQL databases use various query languages, depending on the type of database. For example, MongoDB uses a JSON-like query language,
    while Cassandra uses CQL (Cassandra Query Language). These query languages are often specific to the database system and may
    vary in capabilities and syntax.
4. Scalability:
   - SQL databases are traditionally designed for vertical scaling, which involves adding more resources (CPU, memory, etc.
    to a single server to handle increased loads. However, there are also some sharding techniques that can provide limited horizontal scaling.
   - NoSQL databases are generally designed for horizontal scaling, which involves distributing data across multiple servers or nodes. 
   This approach allows them to handle large amounts of data and high read/write throughput more efficiently.
5. ACID vs. BASE:
   - SQL databases are generally ACID compliant, ensuring strong consistency, atomicity, isolation, and durability of transactions.
    ACID compliance guarantees that all database operations are completed successfully or none are applied.
   - NoSQL databases, especially those designed for high scalability and performance, often follow the BASE model (Basically Available,
    Soft state, Eventually consistent). This model prioritizes availability and partition tolerance over strict consistency, allowing for some eventual consistency in data across nodes.
6. Use Cases:
   - SQL databases are well-suited for applications with fixed and well-defined schemas, transactional systems, complex queries, 
   and where data integrity is crucial (e.g., financial systems, ERP systems).
   - NoSQL databases are often preferred for applications with rapidly changing data models, large-scale web applications, 
   real-time analytics, content management systems, and applications that require high availability and scalability (e.g., social media platforms, 
    IoT data storage).
*/