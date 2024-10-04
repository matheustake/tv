import 'dotenv/config.js';
import express  from 'express';
import cors from 'cors';


import controllerCanal from './controller/controllerCanal.js'
import controllerFavorito from './controller/controllerFavorito.js'
import controllerPrograma from './controller/controllerPrograma.js'
import controllerUsuario from './controller/controllerUsuario.js'


const servidor = express();
        servidor.use(cors())
        servidor.use(express.json())


    servidor.use(controllerUsuario);
    servidor.use(controllerPrograma);
    servidor.use(controllerFavorito);
    servidor.use(controllerCanal);

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`API subiu na PORTA ${PORTA}`))