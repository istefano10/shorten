const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const Url = require('../models/Url');
const utils = require('../utils/utils');
require('dotenv').config({ path: './.env' });
const base = process.env.BASE;

// Short URL Generator
router.post('/short', async (req, res) => {
  const { origUrl } = req.body;

  if (utils.validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const urlId = shortid.generate();
        console.log(base, urlId)
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          urlId,
          shortUrl,
          origUrl,
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('Invalid Original Url');
  }
});

router.get('/short', async (req, res) => {
  try {
    const urls = await Url.find({});
    if (urls) {
      res.json(urls);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
