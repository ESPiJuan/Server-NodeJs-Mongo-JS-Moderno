import { Router } from "express";
import { connect } from "../database";
import { ObjectID } from "mongodb";
const router = Router();

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('links').find({}).toArray();
    console.log(result);
    res.json(result)
});
router.post('/', async (req, res) => {
    const db = await connect();
    const link = {
        command: req.body.command,
        url: req.body.url
    }
    const result = await db.collection('links').insertOne(link);
    console.log(result)
    res.json(result.ops[0])
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('links').findOne({ _id: ObjectID(id) })
    console.log(result);
    res.json(result)
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('links').deleteOne({ _id: ObjectID(id) })
    console.log(result);
    res.json({
        message:`Link ${id} Deleted`
    })
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const link = {
        command: req.body.command,
        url: req.body.url
    }
    const db = await connect();
    const result = await db.collection('links').updateOne({ _id: ObjectID(id) }, { $set: link })
    console.log(result);
    res.json({
        message:`Link ${id} Updated`
    })
});


export default router;