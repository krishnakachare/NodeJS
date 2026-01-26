const express = require('express')
const { UserModel } = require("../models/users.model.js");

const userRouter = express.Router()

//READ
userRouter.get("/", async(req,res) => {
    let query = req.query
    try{
    const users = await UserModel.find(query) //Helps mentioning the query
    res.send(users)
    }
    catch(err){
        res.status(500).send({"msg": "Cannot register", "error": err.message})
    }
})

//CREATE
userRouter.post("/register", async(req,res) => {
    console.log(req.body)
    const user = new UserModel(req.body) 
    try {
        await user.save()
        res.send({"msg": "User has been registered"})
    } catch (err) {
        console.error(err)
        res.status(500).send({"msg": "Cannot register", "error": err.message})
    }
})

//UPDATE
userRouter.patch("/update/:id", async(req,res) => {
    const ID = req.params.id
    const payload = req.body
    try{
        await UserModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg": "User has been updated"})
    }catch(err){
        res.status(500).send({"msg": "Cannot modify", "error": err.message})
    }
})

//DELETE
userRouter.patch("/delete/:id", async(req,res) => {
    const ID = req.params.id
    try{
        await UserModel.findByIdAndDelete({_id:ID})
        res.send({"msg": "User has been deleted"})
    }catch(err){
        res.status(500).send({"msg": "Cannot delete", "error": err.message})
    }
})

module.exports = {
    userRouter
}