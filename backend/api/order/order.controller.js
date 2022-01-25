const orderService = require('./order.service.js')
async function getOrders(req, res) {

    try {
        let { filterBy } = req.query;
        console.log('the filter by parse', filterBy)
        // filterBy = JSON.parse(filterBy);
        const orders = await orderService.query(filterBy)
        res.json(orders);
    } catch (err) {
        console.log(err)
        logger.error('Failed to get orders', err)
        res.status(500).send({ err: 'Failed to get orders' })
    }

}

async function getOrderById(req, res) {
    try {
        const orderId = req.params.id;
        const toy = await orderService.getById(orderId)
        res.json(order)
    } catch (err) {
        logger.error('Failed to get order', err)
        res.status(500).send({ err: 'Failed to get order' })
    }
}

async function addStay(req, res) {
    try {
        const order = req.body;
        const addedOrder = await orderService.add(order)
        res.json(addedOrder)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({ err: 'Failed to add stay' })
    }
}





module.exports = { getOrders, getOrderById, addStay }