import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers.authorization
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded)=>{
      if(err){
        res.status(401).json("Not Authorized")
      }
      if(decoded){
       next()
      }
      else{
        res.status(401).json("Not Authorized")
      }
    })
  }else{
    res.status(401).json("Not Authorized")
  }
  
}
