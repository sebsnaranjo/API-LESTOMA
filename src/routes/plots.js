const express = require("express");
const plotSchema = require("../models/plot");

const router = express.Router();

//Create plot "Trama"
router.post('/plots', (req, res) => {
    const plot = plotSchema(req.body);
    plot.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get all plots
router.get('/plots', (req, res) => {
    plotSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get plot
router.get('/plots/:id', (req, res) => {
    const { id } = req.params;
    plotSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Update plot
router.put('/plots/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    plotSchema.updateOne({ _id: id }, { $set: {name, age, email} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete plot
router.delete('/plots/:id', (req, res) => {
    const { id } = req.params;
    plotSchema.remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;