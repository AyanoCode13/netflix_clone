import jwt from "jsonwebtoken"

export default (user) =>{
    if(user){
        const token = jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn: 60 * 1000})
        return process.env.JWT_ACCESS_TOKEN_URL+token
    
    }else{
        return process.env.JWT_FAIL_AUTH_URL
    }
    
}