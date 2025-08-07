const db = require('../db/queries')

async function assetsGet(req, res){
    res.render("assetsPage", {
        title: "List of assets"
    })
}

async function assetCreateGet(req, res){
    res.render('assetCreatePage', {
        title: "Add asset"
    })
}

async function assetCreatePost(req, res){
    const assetName = req.body.assetName
    const {assetType} = req.body
    const assetBrand = req.body.assetBrand
    const assetNumber = req.body.assetNumber
    const {assetStatus} = req.body

    await db.insertAsset(assetName, assetType, assetBrand, assetNumber, assetStatus)
    res.redirect('/')

}

module.exports = {
    assetsGet, assetCreateGet, assetCreatePost
}