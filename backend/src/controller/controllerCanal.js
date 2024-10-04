    import * as db from '../repository/canalRepository.js';
    import { Router } from "express"
    const endpoints = Router();

endpoints.get('/canal', async (req,resp) =>{

try {
    let registros = await db.consultarCanal();
    resp.send(registros)
} 

catch (error) {
    
    resp.status(400).send({
            erro: error.message
        })
}
})

endpoints.post('/canal/', async (req, resp) => {

try {
    
let conal = req.body
let id = await db.inserirCanal(conal);


resp.send({
    novoId: id
})


} catch (error) {
    resp.status(400).send({
        erro: error.message
    })
}
})

endpoints.put('/canal/:id', async (req, resp) =>{

    try {
    
        let conal = req.body;
        let id = req.params.id;
        
        
        let linhasAfetadas = await db.alterarCanal(conal, id);
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
    
endpoints.delete('/canal/:id', async (req, resp) => {
        try {
            let id = req.params.id;
    
            let linhasAfetadas = await db.deletarCanal(id);
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