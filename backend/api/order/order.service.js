const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;
const stayService = require('../stay/stay.service');

async function query(filterBy) {
  console.log('the filter in service', filterBy);

  try {
    const criteria = buildCriteria(filterBy);
    console.log('criteria:', criteria);

    const collection = await dbService.getCollection('order');
    let orders = await collection.find(criteria).toArray();
    return orders;
  } catch (err) {
    console.log('the err', err);
    logger.error('cannot find orders', err);
    throw err;
  }
}

function buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.userId) {
    criteria['host._id'] = ObjectId(filterBy.userId);
  }
  return criteria;
}

async function getById(orderId) {
  try {
    const collection = await dbService.getCollection('order');
    const order = await collection.findOne({ _id: ObjectId(orderId) });
    // stay.reviews = await reviewService.query({ stayId })
    // console.log('the stay in service', stay)
    return order;
  } catch (err) {
    logger.error(`while finding toy ${orderId}`, err);
    throw err;
  }
}

async function add(order) {
  console.log('order:', order);

  try {
    const updatedOrder = { ...order, status: 'pending' };
    const collection = await dbService.getCollection('order');
    await collection.insertOne(updatedOrder);
    return order;
  } catch (err) {
    logger.error('cannot insert stay', err);
    throw err;
  }
}

async function update(order) {
  console.log('order:', order);

  try {
    let id = ObjectId(order._id);
    delete order._id;
    const collection = await dbService.getCollection('order');
    await collection.updateOne({ _id: id }, { $set: { ...order } });
    return order;
  } catch (err) {
    console.log('the err in update', err);
    logger.error(`cannot update stay ${order}`, err);
    throw err;
  }
}

async function remove(orderId) {
  try {
    const collection = await dbService.getCollection('order');
    await collection.deleteOne({ _id: ObjectId(orderId) });
    return orderId;
  } catch (err) {
    logger.error(`cannot remove toy ${orderId}`, err);
    throw err;
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
};
