const express = require("express");

const Projects = require("./project-model.js")

const routerPrj = express.Router(); 

routerPrj.get('/',(req,res) =>{
    Projects.find()
})

routerPrj.get('/:id', (req,res) =>{
    Projects.findById()
})

routerPrj.get('/:id/tasks', (req,res) =>{
    Projects.findTasks()
})

routerPrj.post('/', (req,res) =>{
    Projects.add()
})
module.exports = router 