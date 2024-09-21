const express = require("express");
const Todo = require("../models/todos");

const router = express.Router()

//post request
router.post('/create', async (req, res)=>{
    try {
        //newly launched es6
        const {title, description} = req.body

        //old one
        //const title1 = req.body
        //const desc = req.body

        const newTodo = new Todo({
            title,
            description
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo) 
    } catch (error) {
        res.status(500).json({"error": error})
    }
})


//send request
router.get("/create", (req, res) => {
    res.send("Todo route is working")
})

module.exports = router;