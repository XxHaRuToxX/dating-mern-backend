const { request, response } = require('express');
const Cards = require('../models/dbCards');


const addCard = async (req = request, res = response)=>{
    const dbCard = req.body;

    try {
        let cards = await Cards.create(dbCard);
        res.status(201).json(cards)
    } catch (error) {
        res.status(500).json({
            error,
        })
    }

}

const getCards = async (req = request, res = response)=>{

    try {
        let cards = await Cards.find();
        res.status(201).json(cards)
    } catch (error) {
        res.status(500).json({
            error,
        })
    }

}

module.exports={
    addCard,
    getCards,
}
