var express = require('express');
var router = express.Router();
var listValues=require('../models/listValues');

router.get('/:id?',function(req,res,next){
    listValues.getlistValues(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;