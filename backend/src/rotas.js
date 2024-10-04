import controllerCanal from './controller/controllerCanal.js'
import controllerFavorito from './controller/controllerFavorito.js'
import controllerPrograma from './controller/controllerPrograma.js'
import controllerUsuario from './controller/controllerUsuario.js'



export default function adicionarRotas(servidor){

servidor.use(controllerCanal);
servidor.use(controllerFavorito);
servidor.use(controllerPrograma);
servidor.use(controllerUsuario);

}