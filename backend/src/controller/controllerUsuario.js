import * as db from '../repository/usuarioRepository.js';

import { Router } from "express"
const endpoints = Router();

endpoints.get('/usuario', async (req,resp) =>{

try {
    let registros = await db.consultarUsuario();
    resp.send(registros)
} 

catch (error) {
    
    resp.status(400).send({
            erro: error.message
        })
}
})

endpoints.post('/usuario/', async (req, resp) => {

try {
    
let usu = req.body
let id = await db.inserirUsuario(usu);


resp.send({
    novoId: id
})


} catch (error) {
    resp.status(400).send({
        erro: error.message
    })
}
})

endpoints.put('/usuario/:id', async (req, resp) =>{

    try {
    
        let usu = req.body;
        let id = req.params.id;
        
        
        let linhasAfetadas = await db.alterarUsuario(usu, id);
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
    
endpoints.delete('/usuario/:id', async (req, resp) => {
        try {
            let id = req.params.id;
    
            let linhasAfetadas = await db.deletarUsuario(id);
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