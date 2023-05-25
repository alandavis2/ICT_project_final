const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://arunknair2003:WQxDAYa5EBEWBJGZ@cluster0.dbylnkz.mongodb.net/Arun';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5001, () => {
      console.log("Server is listening on port 5001");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

const usersRoutes = require('./routes/users');
const blogsRoutes = require('./routes/blogs');
app.use('/api/users', usersRoutes);
app.use('/api/blogs', blogsRoutes);

module.exports = app;
