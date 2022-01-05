import express from 'express';
import cancionesRoutes from './roots/canciones';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))

cancionesRoutes(app);

app.get('/prueba', (req,res,next)=>{
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.status(200).json({nombre : "David"});
    res.send("Prueba del servidor");
})

app.listen(port, ()=>{
    console.log(`El puerto es ${port}`);
})

