import jwt from "jsonwebtoken"

export const verifyToken=(req,res,next)=>{
    const token= req.cookies.access_token

    if(!token){
        return res.status(401).send("You are not Authinticated !")
    }

    //verify token

    jwt.verify(token, process.env.JWT_TOKEN, (err,user)=>{
        if(err) { return res.status(401).send("Token is Invalid")}

        req.user=user;

        next();
    })
}     


export const verifyUser = (req,res,next)=> {
    verifyToken (req,res, ()=>{

        if(req.user.id == req.params.id || req.user.isAdmin){
            next();
        }else{
            return res.status(401).send("You are not Authinticated !!!")
        }

    })
}


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req.user.isAdmin)
      if (req.user.isAdmin) {
        next();
      } else {
        return res.send("You are not Admin")
      }
    });
  };