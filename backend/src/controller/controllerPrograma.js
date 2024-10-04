import * as db from '../repository/programaRepository.js';

import { Router } from "express"
const endpoints = Router();

endpoints.get('/program', async (req,resp) =>{

try {
    let registros = await db.consultarPrograma();
    resp.send(registros)
} 

catch (error) {
    
    resp.status(400).send({
            erro: error.message
        })
}
})

endpoints.post('/program/', async (req, resp) => {

try {
    
let pro = req.body
let id = await db.inserirPrograma(pro);


resp.send({
    novoId: id
})


} catch (error) {
    resp.status(400).send({
        erro: error.message
    })
}
})

endpoints.put('/program/:id', async (req, resp) =>{

    try {
    
        let pro = req.body;
        let id = req.params.id;
        
        
        let linhasAfetadas = await db.alterarPrograma(pro, id);
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
    
endpoints.delete('/program/:id', async (req, resp) => {
        try {
            let id = req.params.id;
    
            let linhasAfetadas = await db.deletarPrograma(id);
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