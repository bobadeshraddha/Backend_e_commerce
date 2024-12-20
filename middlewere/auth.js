const jwt = require('jsonwebtoken');


function verifyToken(req,res,next){
   var token = req.headers.authorization?.split(' ')[1];

   if(!token){
    return res.status(403).json({ status:0, message:' No token provided.'});
   }

   jwt.verify(token,'secret',(error,decoded)=>{
    if(error){
        return res.status(500).json({ status:0,message:'Invalid token.'});
    }
    req.name = decoded.name;
    req.id = decoded.id;
    req.role = decoded.role ??"user";


    next();
   })


}





module.exports = verifyToken;