const ADMIN_USERS = ['Ada', 'Greta', 'Vim', 'Tim']

function adminUsers (req, res, next){
    if(req.query.user == "Greta" || req.query.user == "Ada" || req.query.user == "Vim" || req.query.user == "Tim"){
        next()
    }else{
        res.send("quien te conoce rey")
    }
}

module.exports = adminUsers 