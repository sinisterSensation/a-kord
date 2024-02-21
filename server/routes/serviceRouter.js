const Router = require('express')
const ServiceController = require('../controllers/serviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

const router = new Router()


router.post('/', checkRole('ADMIN'), ServiceController.create)
router.get('/', ServiceController.getAll)
router.get('/:id', ServiceController.getOne)
router.delete('/:id', checkRole('ADMIN'), ServiceController.delete)


module.exports = router