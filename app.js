const express = require('express');
const app = express()
const router = require('./src/routes/TotalRevenue')
const mongoose = require('mongoose');








mongoose.connect('mongodb://127.0.0.1:27017/SalesAnalytics').then(()=> console.log('db canection success')).catch(()=>{
    console.log('db canection fails')
})

app.use('/api',router)


module.exports = app