const mysql = require("mysql2/promise")

const pool = mysql.createPool({
	host: '1ddpl1esyo82.aws-sa-east-1-1.psdb.cloud',
	user: 'mo5uqzi3vh9p',
	password: 'pscale_pw_UNAb67-F9D8WPhjy9hB04F-mPYQV8LjLHFAYus7PFCQ',
	port: 3306,
	database: 'films',
	ssl: {"rejectUnauthorized":true} 
})

module.exports = pool