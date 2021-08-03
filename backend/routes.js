const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const items = require('./datamodel');

const db = mongoose.connection;

router.post('/additem', async(req, res) => {
    const id = req.body.id;
    const item = req.body.title;
    const list = new items({
        id,
        item
    })
    list.save()
        .then(data => res.json(data))
        .catch(error => res.json(error));
    res.send();

});
router.get('/getdata', async(req, res) => {
    const data = await db.collection("todolists").find({}, async(err, result) => {
        let data = []
        if (err) console.log(err);
        else {
            await result.forEach(value => {
                const obj = {
                    id: value.id,
                    item: value.item
                }
                data.push(obj);
            })
        }
        res.send(data);
    })
});

router.get('/delete:id', async(req, res) => {
    const id = Number(req.params.id);
    await db.collection("todolists").deleteOne({ "id": id })
    res.send("deleteed")

});
module.exports = router;