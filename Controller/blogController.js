const { BlogsModel } = require("../Model/blogsModel");
const UserModel = require("../Model/userModel");

const getAllBlogs = async (req, res) => {
  try {
    let blogData = await BlogsModel.find().populate("userId");

    res.send(blogData);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const addBlog = async (req, res) => {
  const postData = req.body;

  const newBlog = new BlogsModel({
    title: postData.title,
    description: postData.description,
    userId: postData.userId,
  });

  await newBlog.save();
  console.log(postData);

  res.send(newBlog);
};

module.exports = { getAllBlogs, addBlog };
// commonjs

// ecma script

// module.exports = { getAllBlogs };
