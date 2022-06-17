const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add title'],
    },
    content: {
      type: String,
      required: [true, 'Please add content'],
    },
  },
  {
    timestamps: true,
  }
);
const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;
