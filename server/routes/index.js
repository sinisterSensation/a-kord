const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const serviceRouter = require('./serviceRouter')
const userRouter = require('./userRouter')
// const basketRouter = require('./basketRouter')


// router.use('/basket', basketRouter)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)
router.use('/service', serviceRouter)

module.exports = router