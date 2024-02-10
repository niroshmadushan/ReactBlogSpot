const express =require('express');
const router =express.Router();
const {Forex} = require('../models');

router.get('/',async(req,res)=>{
    res.send("thank you");
});
router.post('/',async (req,res)=>{
    const data=req.body;
    await Forex.create(data);
    res.json(data);
    
});



module.exports = router