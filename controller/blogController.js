const Blog = require('../models/blogModel');
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const setBlog = async (req, res) => {
  const blog = req.body;
  const newBlog = new Blog(blog);
  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(404).json({
      message: 'Blog not found',
    });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    await blog.remove();
    res.status(200).json({
      message: 'Object deleted',
    });
  } catch (error) {
    res.status(404).json({
      message: 'Object Not Found',
    });
  }
};
module.exports = { getBlogs, setBlog, updateBlog, deleteBlog };
