require('dotenv').config()
const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS assets(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(50),
    type VARCHAR(25),
    brand VARCHAR(25),
    serial_number VARCHAR(100) UNIQUE,
    status VARCHAR(25),
    time_created TIMESTAMP DEFUALT NOW()
    );
`

async function main(){
    console.log('seeding....')

    const client = new Client({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    })

    try{
        console.log(`Connecting to database: ${process.env.DB_NAME} at ${process.env.DB_HOST}`)
        await client.connect();
        console.log("Connected to database successfully");
        await client.query(SQL);
        console.log('Talbe was created successfully')
        await client.end()
        console.log("Done")
    } catch(error){
        console.error("Database error:", error.message);
        console.error("Make sure PostgreSQL is running and the database exists");
        process.exit(1);
    }
}

main();