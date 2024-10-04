import * as db from '../repository/favoritoRepository.js';

import { Router } from "express"
const endpoints = Router();

endpoints.get('/favorito', async (req,resp) =>{

try {
    let registros = await db.consultarFavorito();
    resp.send(registros)
} 

catch (error) {
    
    resp.status(400).send({
            erro: error.message
        })
}
})

endpoints.get('/favorito/j', async (req,resp) =>{

    try {
        let registros = await db.consultarFavoritoj();
        resp.send(registros)
    } 
    
    catch (error) {
        
        resp.status(400).send({
                erro: error.message
            })
    }
    })



endpoints.post('/favorito/', async (req, resp) => {

try {
    
let fav = req.body
let id = await db.inserirFavorito(fav);


resp.send({
    novoId: id
})


} catch (error) {
    resp.status(400).send({
        erro: error.message
    })
}
})

endpoints.put('/favorito/:id', async (req, resp) =>{

    try {
    
        let fav = req.body;
        let id = req.params.id;
        
        
        let linhasAfetadas = await db.alterarFavorito(fav, id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado'})
        }
       
    
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
    })
    
endpoints.delete('/favorito/:id', async (req, resp) => {
        try {
            let id = req.params.id;
    
            let linhasAfetadas = await db.deletarFavorito(id);
            if (linhasAfetadas >= 1) {
                resp.send();
            }
            else {
                resp.status(404).send({ erro: 'Nenhum registro encontrado'})
            }
        }
        catch (err) {
            resp.status(400).send({
                erro: err.message
            })
        }  
    })


export default endpoints;