const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getOrders, getOrder, addOrder, updateOrder, deleteUser } = require('./order.controller')

const router = express.Router()

//dev
router.get('/', getOrders)
// router.get('/:orderId', getOrder)
// router.post('/', addOrder)
// router.put('/:orderId', updateOrder)
// router.delete('/:orderId', deleteUser)



//prod
// router.get('/', requireAuth, getOrders)
// router.get('/:orderId', requireAuth, getOrder)
// router.post('/', requireAuth, addOrder)
// router.put('/:orderId', requireAuth, updateOrder)

// router.delete('/:id', requireAuth, deleteUser)




module.exports = router