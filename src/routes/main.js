let express = require('express')
let router = express.Router()
let controller = require('../controllers/mainController')
let userAdminCheck = require('../middlewares/adminUsers')

router.get('/', controller.index)
router.get('/admin', userAdminCheck, controller.admin)

module.exports = router
