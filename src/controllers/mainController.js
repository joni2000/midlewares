let fs = require('fs')

let controller = {
    index: (req, res) => {
        res.render("index")
    },
    admin: (req, res )=> {
        res.send(`Bienvenid@ admin ${req.query.user}`)
    }
}

module.exports = controller
