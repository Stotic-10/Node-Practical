const mongoose = require('mongoose');

const db = async()=>{
    await mongoose.connect("mongodb://localhost:27017/practical");
    console.log('database connected!!');
}

module.exports = { db };