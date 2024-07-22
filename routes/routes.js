const express = require('express');
const router = express.Router();
const model = require('../models/model');
const { Model } = require('mongoose');
router.post('/post', async(req, res) => {
    const data = new model({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});
router.get('/get', (req, res) => {
    res.send('get all api')
});
router.get('/getOne/:id', (req, res) => {
    res.send('get by api id')
});
router.patch('/update/:id', (req, res) => {
    res.send('update by id API')
});
router.delete('/delete/:id', (req, res) => {
    res.send('delete api id')
});

module.exports = router;

