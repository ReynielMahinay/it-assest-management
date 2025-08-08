const pool = require('./pool')
const formatDate = require('../utils/dateFormatter')

async function allAssetsGet(){
    let query = "SELECT * FROM assets ORDER by id ASC"
    let params = []

    const {rows} = await pool.query(query, params)
    return rows.map(asset => ({
        ...asset,
        time_created:formatDate(asset.time_created),
        time_updated:formatDate(asset.time_updated),
    }))
}

async function insertAsset(name, type, brand, serial_number, status){
    await pool.query("INSERT INTO assets (name, type, brand, serial_number, status)VALUES ($1, $2, $3, $4, $5)", [name, type, brand, serial_number, status])
}

async function editAsset(id){
    const result = await pool.query("SELECT * FROM assets WHERE id = $1", [id])
    if(result === 0 ){
        console.log("No assets found with that ID")
    } else{
        return result.rows[0]
    }
}

async function uptadeAsset(id, name, type, brand, serial_number, status){
    const result = await pool.query(
        `UPDATE assets
        SET name = $2, type = $3, brand = $4, serial_number = $5, status = $6,  time_updated = NOW()
        WHERE id = $1
        RETURNING *
        `,
        [id, name, type, brand, serial_number, status]
    )

    if(result.rows.length === 0 ){
        return null;
    }

    return result.rows[0]
}

async function deleteAsset(id) {
    const result = await pool.query("DELETE FROM assets WHERE id = $1 RETURNING *", [id]);
 
    if(result.rowCount === 0){
        console.log("No assets found with that ID")
    } else {
        console.log("Delete assets: ", result.rows[0])
    }
}


module.exports = {
    insertAsset, allAssetsGet, deleteAsset, editAsset, uptadeAsset
}