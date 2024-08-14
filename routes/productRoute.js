const express = require('express');
const router = express.Router();
const model = require('../models/productModel');
const { Model } = require('mongoose');
const productModel = require('../models/productModel');
router.post('/post', async(req, res) => {
    const data = new model({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
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
        const data = await productModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/getOne/:username', (req, res) => {
    res.send('get by api id')
});
router.patch('/update/:username', (req, res) => {
    res.send('update by id API')
});
router.delete('/delete/:username', (req, res) => {
    res.send('delete api id')
});

module.exports = router;

