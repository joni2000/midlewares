let fs = require('fs')

let controller = {
    index: (req, res) => {
        res.render("index")
    }
}

module.exports = controller
