const express = require('express')
const router = express.Router();
const assetsController = require('../controllers/assets.controller')


router.get('/', (req, res) => {
  res.render('index', { title: 'Asset Inventory Home' });
});
    
router.get('/assets', assetsController.assetsGet)
router.get('/create-asset', assetsController.assetCreateGet)
router.post('/create-asset', assetsController.assetCreatePost)
router.get('/:id/update', assetsController.assetUpdateGet)
router.post('/:id/update', assetsController.updateEditedAssetPost)
router.post('/:id/delete', assetsController.deleteAssets)

module.exports = router;