import con from './connection.js';

export async function inserirPrograma(pro) {
    const comando = ` insert into tb_canal_programa(id_canal, nm_programa, ds_genero, hr_programa)
    values (?, ?,  ?, ?);
   
    `

    let resposta = await con.query(comando, [pro.canal, pro.programa, pro.genero, pro.hora])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarPrograma (id, pro) {
  const comando = ` select id_canal_programa  id,
                           id_canal           canal,  
                           nm_programa        programa  ,
                           ds_genero          genero , 
                           hr_programa        hora 
                           from tb_canal_programa
                        
                           `;            

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}

export async function alterarPrograma (id, pro) {
  const comando = `

  update tb_canal_programa
  set canal = ?,
      programa = ?,
      genero = ?,
      hora = ?
  where id_canal_programa = ?;
  `

  let resposta = await con.query(comando, [pro.canal, pro.programa, pro.genero, pro.hora])
  let info = resposta[0];

  
  let linhasAfetadas = registros.affectedRows
  
  return linhasAfetadas;
  
}

export async function deletarPrograma (id, pro) {
  const comando = ` 
   delete from tb_canal_programa
   where id_canal_programa = ?
  `

  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  return info.affectedRows;
}

