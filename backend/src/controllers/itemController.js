const Item = require("../model/itemModel");
const mongoose = require('mongoose');


const getAllItems = async (req, res) => {
         const result = await Item.find().sort({createAt: -1});
         res.status(200).json(result);
    }

const getSearchedItems = async (req, res) => {
    const { q } = req.query;
    console.log(q);
    try {
        let items;
        if(q){
            items = await Item.find({name:  {$regex: q, $options: 'i'}});
        }
        res.status(200).json(items);
    }  catch (error){
            res.status(500).json({message: "No items found!"})         
    }
}


const getSingleItem = async (req, res) => {
    const { id } = req.params;
    const name = id.toString().split("%20").join(" ");
    try {
        // Query the database using the string _id
        const item = await Item.findOne({ name:id });

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.json(item);
    } catch (error) {
        console.error('Error fetching item:', error);
        res.status(500).json({ message: 'Server error' });
    }
};





module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem
}