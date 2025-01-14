const express = require('express');
const router = express.Router();
const path = require('path')
data ={}

data.employees = require('../data/data.json');

//we also write individual command
//chaining 
router.route('/')
    .get((req, res) => { 
        res.json(data.employees);
    })
    .post((req, res) => { 
        res.json({
            "firstName": req.body.firstname,
            "lastName" : req.body.lastname
        })
    } )
    .put((req, res) => { 
        res.json({
            "firstName": req.body.firstname,
            "lastName" : req.body.lastname
        })
    } )
    .delete((req, res) => { 
        res.json({
            "id":req.body.id
        })
    })

router.route('/:id')
    .get((req, res) => {
        res.json({
            "id":req.params.id//path value is param
        })
    })

module.exports = router;