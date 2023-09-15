import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const {Pool} = pkg

const db = process.env.DATABASE_URL
console.log(db);
const pool = new Pool({
    connectionString: db
});

pool.on('connect',()=>{
    console.log("database connected");
})

const database = {query:(text,params)=>pool.query(text,params)}
export {database}