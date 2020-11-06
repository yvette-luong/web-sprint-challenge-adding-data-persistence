const express = require("express");

const Projects = require("./projectModel")

const routerPrj = express.Router(); 

routerPrj.get('/',(req,res) =>{
    Projects.find()
    .then((projects)=>{
        res.status(200).json({notification:'Projects informations are successfully retrived !', data : projects })
    })
    .catch((err) =>{
        res.status(500).json({notification:'ERR TO GET information', errMessage: err.message})
    })
})

routerPrj.get('/:id', (req,res) =>{
    const { id } = req.params
    Projects.findById(id) 
    .then((project) =>{
        if(project) {
            res.status(200).json({notification:"ProjectById information is successfully rectrive!", data: project })
        } else {
            res.status(404).json({notification:'ProjectById could not be found', errMessage: err.message})
        }
    })
    .catch((err) =>{
        res.status(500).json({notification:'ERR IN GET BY ID', errMessage: err.message})
    });
})

routerPrj.get('/:id/tasks', (req,res) =>{
    const { id } = req.params
    Projects.findTasks(id)
    .then(tasks =>{
        if(tasks.length) {
            res.status(200).json({notification: 'FindTask by ID successful', data: tasks})
        } else {
            res.status(404).json({notification:'FindTask by ID could not be found', errMessage: err.message})
        }
    })
    .catch((err) =>{
        res.status(500).json({notification:'ERR IN GET TASKS BY ID', errMessage: err.message})
    });
})

routerPrj.post('/', (req,res) =>{
    Projects.add(req.body)
    .then((project)=>{
        if(project) {
            Projects.findById(project[0])
            .then(project =>{
                res.status(201).json({notification:'POST successful', updateddata: project})
            })
            .catch(err=>{
                res.status(404).json({notification:'ERR in POST REQUEST', errMessage: err.message})
            })
        } else { 
        res.status(400).json({notification:'something wrong', errMessage: err.message})    
        }
    })
    .catch(err=>{
        res.status(500).json({notification:'Please give the correct information', errMessage: err.message})
    })
})

module.exports = routerPrj