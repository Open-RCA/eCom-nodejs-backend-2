const express = require('express');
const router=express.Router()
 const UserController=require("../controllers/User")
 const {protect}=require("../middleware/auth")

 
 router.post("/registerUser",UserController.register)
 router.post("/login",UserController.login)
 router.get("/getAllUsers",UserController.getAllUsers)
 router.get("/getUserById/:id",UserController.getUserById)
 router.get("/loggedInUser",protect,UserController.getMe)
 router.delete("/deleteUser/:id",UserController.deleteUser)
router.put("/updateUser/:id",UserController.updateUser)


module.exports=router
