const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
const stayService = require('../stay/stay.service')

async function query(filterBy) {
    console.log('the filter in service', filterBy)

    try {
        console.log('im in try')
        const collection = await dbService.getCollection('order')
        // let stays = await collection.find(criteria).toArray()
        let orders = await collection.find({}).toArray()

        return orders
    }
    catch (err) {
        console.log('the err', err)
        logger.error('cannot find orders', err)
        throw err
    }
}

async function getById(orderId) {
    try {
        const collection = await dbService.getCollection('order')
        const order = await collection.findOne({ '_id': ObjectId(orderId) })
        // stay.reviews = await reviewService.query({ stayId })
        // console.log('the stay in service', stay)
        return order
    } catch (err) {
        logger.error(`while finding toy ${orderId}`, err)
        throw err
    }
}


module.exports = {
    // remove,
    query,
    getById,
    // add,
    // update,
}


