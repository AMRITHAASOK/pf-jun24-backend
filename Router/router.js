//1 import express
const express = require('express')

//2 create router from express
const router = express.Router()

//4 import user controller
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')
//3 Create route for each requests

// 1 Register request : http://localhost:4000/api/register
router.post('/api/register',userController.register)


// 2 login request : http://localhost:4000/api/register
router.post('/api/login',userController.login)

//3 add project
router.post('/api/addProject',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addProject)

//get all users projects
router.get('/api/getAllUserProject',jwtMiddleware,projectController.getAllUserProject)

//get a users project
router.get('/api/getAUserProject',jwtMiddleware,projectController.getUserProject)

//get Home project   
router.get('/api/getHomeProject',projectController.getHomeProject)

//deleteProject
router.delete('/api/deleteProject/:projectId',jwtMiddleware,projectController.deleteProject)

router.put('/api/updateProject/:projectId',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.updateProject)


module.exports=router