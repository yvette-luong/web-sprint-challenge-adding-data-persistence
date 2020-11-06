const express = require("express");
const helmet = require('helmet');
const morgan = require('morgan')

const server = express();

server.use(express.json());
server.use(helmet())
server.use("/", morgan("-- Adding Data Persistence --"));

server.get("/", (req, res, next ) =>{
    res.status(200).json({ api: "Adding data persistence Sprint", query: req.query })
    next();
});


module.exports = server;