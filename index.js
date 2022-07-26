const express = require('express')
const app = express();
const pool = require('./db.js')

    app.listen(3000,() => {console.log('Sever rodando: http://localhost:3000')});
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}));
    app.use((req,res,next) =>{
      res.header('Access-Control-Allow-Origin','*')
      res.header('Access-Control-Allow-Header','Origin, X-Requrested-With, Content-Type, Accept, Authorization')
      if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods','GET,POST,DELETE')
        return res.status(200)
      }
      next();
    })

    app.post('/', async(req,res) =>{
        const {id, title, image, movie_banner, description, director, producer} = req.body
        
        try {   
          const [result] = await pool.query('INSERT INTO films_list SET ?', {id, title, image, movie_banner, description, director, producer});
          return res.status(200).json(result);
        } 
        catch (error) { return res.status(500).json({ message: error.message }) }
    })
    
    app.get('/', async(req, res) => {
        try {
          const [result] = await pool.query('SELECT * FROM films_list');
          return res.status(200).json(result);
        } 
        catch (error) { return res.status(500).json({ message: error.message }) }
    });

    app.delete('/films/:id', async(req, res) => {
            try {
              const [result] = await pool.query('Delete FROM usuario WHERE id=?',(req.params.id));
              return res.status(200).json(result);
            } 
            catch (error) { return res.status(500).json({ message: error.message }) }
        })
