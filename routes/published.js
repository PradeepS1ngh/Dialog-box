const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/',(req,res) => {
    try {
        fs.readFile('./DataBase/Published.json', 'utf-8', function(err, data) {
            if (err) throw err
            var arrayOfObjects = JSON.parse(data)
            return res.json(arrayOfObjects);
        })
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/',(req,res) => {
    fs.readFile('./DataBase/Published.json', 'utf-8', function(err, data) {
        if (err) throw err
        var arrayOfObjects = JSON.parse(data)
        arrayOfObjects.publish.push({
            "title" : req.body.title,
            'desc' : req.body.desc,
        })
        fs.writeFile('./DataBase/Published.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
            if (err) throw err
            console.log('Done!')
        })
    })
    res.send(req.body);
})

module.exports = router;