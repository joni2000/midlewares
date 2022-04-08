const ADMIN_USERS = ['Ada, ']

function adminUsers (req, res, next){
    if(req.query.user == "Greta"){
        next()
    }else{
        res.send("quien te conoce rey")
    }
}