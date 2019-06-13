const express = require('express');
const router = express.Router();

//Bring in Item model
const Item = require('../../models/Item');

//@routes GET api/items
//@desc Get All Items
//@access public

router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items));
});

//@routes POST api/items
//@desc Create An Item 
//@access public

router.post('/', (req, res) => {
    const newItem = new Item({
        name:req.body.name
    });
    newItem.save().then(item => res.json(item));
});

//@routes DELETE api/items
//@desc Delete An Item 
//@access public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item=>item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
})




module.exports = router;
