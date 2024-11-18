const applicationMiddleware=(req,res,next)=>{
        console.log("inside Application Level middleware");
        next()
}
module.exports=applicationMiddleware