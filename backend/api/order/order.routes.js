const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getOrders, getOrderById, addOrder, updateOrder, removeOrder, deleteUser } = require('./order.controller')

const router = express.Router()

//dev
router.get('/', getOrders)
router.get('/:orderId', getOrderById)
router.post('/', addOrder)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', removeOrder)



//prod
// router.get('/', requireAuth, getOrders)
// router.get('/:orderId', requireAuth, getOrder)
// router.post('/', requireAuth, addOrder)
// router.put('/:orderId', requireAuth, updateOrder)

// router.delete('/:id', requireAuth, deleteUser)




module.exports = router