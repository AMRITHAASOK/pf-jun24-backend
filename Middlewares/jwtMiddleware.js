const jwt = require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
        console.log("Inside jwtMiddleware");
        try{
                console.log("try block"); 
                const token = req.headers['authorization'].slice(7)
                console.log(token);
                if(token){
                        jwtVerification =jwt.verify(token,process.env.jwtToken)
                        console.log(jwtVerification);
                        req.payload = jwtVerification.userId
                        next()
                }
                else{
                       res.status(401).json("Please provide token")
                }
                
        }
        catch(err){
          res.status(403).json("Please login")
                
        }
}
module.exports= jwtMiddleware