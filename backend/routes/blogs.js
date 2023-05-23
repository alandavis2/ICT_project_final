const express = require('express');
const router = express.Router();

const blogsController = require('../controllers/blogsController');

router.post('/', blogsController.blog_create);
router.get('/', blogsController.blog_index);
router.get('/:id', blogsController.blog_details);
router.put('/:id', blogsController.blog_update);
router.delete('/:id', blogsController.blog_delete);

module.exports = router;
