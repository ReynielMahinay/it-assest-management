const express = require('express')
const router = express.Router();
const assetsController = require('../controllers/assets.controller')


router.get('/', (req, res) => {
  res.render('index', { title: 'Asset Inventory Home' });
});

router.get('/assets', assetsController.assetCreateGet)
router.get('/assets', assetsController.assetsGet)
router.post('/create-asset', assetsController.assetCreatePost)

module.exports = router;