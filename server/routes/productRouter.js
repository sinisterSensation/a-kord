const Router = require('express')
const ProductController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

const router = new Router()


router.post('/', checkRole('ADMIN'), ProductController.create)
router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.delete('/:id', checkRole('ADMIN'), ProductController.delete)


module.exports = router