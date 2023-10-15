const mysql = require("mysql2")

const db = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"mec_project"
})

db.connect(()=>{
    console.log("Database connected")
})

module.exports = db