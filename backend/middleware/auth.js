import jwt from "jsonwebtoken"

export const authenticateUser = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({
            msg:'No token provided, authorization denied'
        })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = {id:decoded.user.id}
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:'Invalid Token'})
    }
}