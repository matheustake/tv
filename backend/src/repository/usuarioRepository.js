import con from './connection.js';

export async function inserirUsuario(usu) {
    const comando = `
    insert into tb_usuario (nm_usuario) 
    values (?);
    `

    let resposta = await con.query(comando, [usu.nome])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarUsuario (id, usu) {
  const comando = ` select id_usuario   id,
                           nm_usuario   nome
                           from tb_usuario

                           
                           `;

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}


export async function alterarUsuario (usu, id) {
  const comando = `

  update tb_usuario
  set nm_usuario = ?
  where id_usuario = ?;
  `

  let resposta = await con.query(comando, [usu.nome, id])
  let registros = resposta[0];

  let linhasAfetadas = registros.affectedRows
  
  return linhasAfetadas;
}

export async function deletarUsuario (id, usu) {
  const comando = ` 
   delete from tb_usuario
   where id_usuario = ?
  `

  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  return info.affectedRows;
}



