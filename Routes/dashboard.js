const express = require ("express");
const UserModel = require("../Model/userModel");

const router = express.Router()

router.get("/",async(req,res)=>{

    let loggedInUserId = req.userId;

    console.log("The Id",loggedInUserId);

   let loggedInUserData =  await UserModel.findById(loggedInUserId)
    res.send(loggedInUserData)
})

module.exports = router;