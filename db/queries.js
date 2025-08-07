const pool = require('./pool')

async function insertAsset(name, type, brand, serial_number, status){
    await pool.query("INSERT INTO assets (name, type, brand, serial_number, status)VALUES ($1, $2, $3, $4, $5)", [name, type, brand, serial_number, status])
}

module.exports = {
    insertAsset
}