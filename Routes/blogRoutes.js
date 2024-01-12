const express = require("express");
const blogController = require("../Controller/blogController");
const router = express.Router();

// blog
router.get("/", blogController.getAllBlogs);
router.post("/addBlog", blogController.addBlog);

module.exports = router;
