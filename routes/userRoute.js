const express = require('express');
const router = express.Router();
const model = require('../models/userModel');
const { Model } = require('mongoose');
const userModel = require('../models/userModel');
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
router.get('/getAll', async (req, res) => {
    try{
        const data = await userModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
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

