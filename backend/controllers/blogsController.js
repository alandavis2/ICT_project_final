const Blog = require('../models/Blog');


const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: 'Server error' });
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const blog_create = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ message: "Error creating blog" });
    });
};

const blog_update = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ message: "Error updating blog" });
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      if(result) {
        res.send(result);
      } else {
        res.status(404).send({ message: 'Blog not found' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ message: 'Server error' });
    });
};

module.exports = {
  blog_index, 
  blog_details,
  blog_create, 
  blog_update,
  blog_delete
};
