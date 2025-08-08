const db = require('../db/queries')


async function assetsGet(req, res){
    const assets = await db.allAssetsGet();
    
    res.render("assetsPage", {
        title: "List of assets",
        assets: assets
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
    res.redirect('/assets')
}

async function assetUpdateGet(req, res){
    const asset  = await db.editAsset(req.params.id)
    res.render('assetEditPage',{
        title: "Edit Asset",
        asset
    })
}

async function updateEditedAssetPost(req, res){
    const id = req.params.id
    const {assetName, assetType, assetBrand, assetNumber, assetStatus} = req.body

    try{
        const updatedAsset = await db.uptadeAsset(id,assetName, assetType, assetBrand, assetNumber, assetStatus);

        if(!updatedAsset){
            return res.status(404).send("Asset not found")
        }
        res.redirect('/assets')
    }catch(error){
        console.error(error)
        res.status(500).send("Error updating asset")
    }
}

async function deleteAssets(req, res){
    const { id } = req.params;
    await db.deleteAsset(id);
    res.redirect("/assets")
}



module.exports = {
    assetsGet, assetCreateGet, assetCreatePost, deleteAssets, assetUpdateGet, updateEditedAssetPost
}