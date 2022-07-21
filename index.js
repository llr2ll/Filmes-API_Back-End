const https = require('https');
const express = require('express')

const app = express();

    app.listen(3000,() => {console.log('Sever rodando: http://localhost:3000')});
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}));

https.get('https://ghibliapi.herokuapp.com/films'),(response) =>{
    let data = '';
    response.on('data',(chunk) =>{
        data += chunk;
    })

    response.on('end', () => {
        console.log(data);
    })
}