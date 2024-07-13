const express = require('express');
const router = express.Router();
const cors = require('cors');

const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
} = require('../controllers/blogsController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

// Route to create a new blog post
router.post('/create', createBlog);

// Route to get all blog posts
router.get('/getblogs', getAllBlogs);

// Route to get a single blog post by ID
router.get('/getbyidblog/:id', getBlogById);

// Route to update a blog post by ID
router.put('/updateblog/:id', updateBlog);

// Route to delete a blog post by ID
router.delete('/deleteblog/:id', deleteBlog);

module.exports = router;
