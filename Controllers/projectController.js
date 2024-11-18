const projects = require('../Models/projectSchema')


//add project logic
exports.addProject=async(req,res)=>{
    console.log("Inside add project");

        const {title,language,github,link,description}=req.body
        const projectImg = req.file.filename
        const userId = req.payload 

        try{
            const project = await projects.findOne({github})
            if(project){
                res.status(404).json("Project already existing...")
            }
            else{
                const newProject = new projects({title,language,github,link,description,projectImg,userId})
                await newProject.save()
                res.status(200).json(newProject)
            }

        }
        catch(err){
            res.status(402).json("Error" +err)
        }
}

//get all users projects
exports.getAllUserProject=async(req,res)=>{
    try{
        const response = await projects.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(402).json("Error" +err)
    }
}
//get a user project
exports.getUserProject=async(req,res)=>{
    const userId = req.payload
    try{
        const response = await projects.find({userId})
        res.status(200).json(response)
    }
    catch(err){
        res.status(402).json("Error" +err)
    }
}
//get home project