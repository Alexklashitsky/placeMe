const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;

const reviewService = require('../review/review.service');

//list
async function query(filterBy) {
  console.log('the filter in service', filterBy);

  try {
    console.log('im in try');
    const collection = await dbService.getCollection('stay');
    // let stays = await collection.find(criteria).toArray()
    let stays = await collection.find({}).toArray();

    return stays;
  } catch (err) {
    console.log('the err', err);
    logger.error('cannot find stays', err);
    throw err;
  }
}

//details
async function getById(stayId) {
  try {
    const collection = await dbService.getCollection('stay');
    const stay = await collection.findOne({ _id: ObjectId(stayId) });
    // stay.reviews = await reviewService.query({ stayId })
    // console.log('the stay in service', stay)
    return stay;
  } catch (err) {
    logger.error(`while finding toy ${stayId}`, err);
    throw err;
  }
}
async function remove(stayId) {
  try {
    const collection = await dbService.getCollection('stay');
    await collection.deleteOne({ _id: ObjectId(stayId) });
    return stayId;
  } catch (err) {
    logger.error(`cannot remove toy ${stayId}`, err);
    throw err;
  }
}

async function add(stay) {
  try {
    stay.createdBy = req.session.user;
    const collection = await dbService.getCollection('stay');
    const addedStay = await collection.insertOne(stay);
    return addedStay;
  } catch (err) {
    logger.error('cannot insert stay', err);
    throw err;
  }
}
async function update(stay) {
  try {
    let id = ObjectId(stay._id);
    delete stay._id;
    const collection = await dbService.getCollection('stay');
    await collection.updateOne({ _id: id }, { $set: { ...stay } });
    return stay;
  } catch (err) {
    console.log('the err in update', err);
    logger.error(`cannot update stay ${stay}`, err);
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
