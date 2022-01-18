const express = require("express");

const router = express.Router();

const Album = require("../models/album.model");

router.get("",async function (req, res) {

    const page = +req.query.page||1;
    const size = +req.query.size ||4;

const offset=(page-1)*size;



    const album = await Album.find().skip(offset).limit(size).lean().exec();
    return res.send(album);
})


module.exports = router;