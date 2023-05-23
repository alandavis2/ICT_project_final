const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://arunknair2003:WQxDAYa5EBEWBJGZ@cluster0.dbylnkz.mongodb.net/Arun';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5001))
  .catch((err) => console.log(err));

app.use('/api/blogs', require('./routes/blogs'));

