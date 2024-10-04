import con from './connection.js';

export async function inserirFavorito(fav) {
    const comando = ` insert into tb_programa_favorito(id_usuario, id_canal_programa, vl_avaliacao)
    values (?, ?, ?);
   
    `

    let resposta = await con.query(comando, [fav.usuario, fav.programa, fav.avaliacao])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarFavorito (id, fav) {
  const comando = ` select  id_programa_favorito id,
                            id_usuario        usuario,
                            id_canal_programa programa,
                            vl_avaliacao      avaliacao 
                            from tb_programa_favorito


                   `;        


  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}

export async function consultarFavoritoj(id, pro) {
  const comando = ` SELECT tb_programa_favorito.id_programa_favorito,
  tb_usuario.nm_usuario,
        tb_canal_programa.nm_programa ,
        tb_programa_favorito.vl_avaliacao
        FROM tb_programa_favorito
JOIN tb_usuario On tb_programa_favorito.id_usuario = tb_usuario.id_usuario
JOIN tb_canal_programa ON tb_programa_favorito.id_canal_programa = tb_canal_programa.id_canal_programa  
                        
                           `;            

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}

export async function alterarFavorito (id, pro) {
  const comando = `

  update tb_programa_favorito
  set usuario = ?,
      programa = ?,
      avaliacao = ?
  where id_programa_favorito = ?;
  `

  let resposta = await con.query(comando, [fav.usuario, fav.programa, fav.avaliacao])
  let info = resposta[0];
  
  let linhasAfetadas = registros.affectedRows
  
  return linhasAfetadas;
}

export async function deletarPrograma (id, pro) {
  const comando = ` 
   delete from tb_programa_favorito
   where id_canal_programa = ?
  `

  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  return info.affectedRows;
}