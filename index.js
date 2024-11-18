//1 load .env file
require('dotenv').config()
//2 epress import
const express=require('express')
//6 import cors
const cors = require('cors')
require('./DB/connection')
const router = require('./Router/router')
const applicationMiddleware = require('./Middlewares/applicationMiddleware')

//3 create an app using express
const pfServer = express()

//7
pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(applicationMiddleware)
pfServer.use(router)
//image export to frontend
pfServer.use('./uploads',express.static('./uploads'))
//4 port creation
const PORT = 4000 || process.env.PORT

//5.App 
pfServer.listen((PORT),()=>{
    console.log("PfServer listening on the port " +PORT);
})

pfServer.get('/',(req,res)=>{
    res.send("Welcome to PFServer")
})
