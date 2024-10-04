import con from './connection.js';

export async function inserirCanal(conal) {
    const comando = `
    insert into tb_canal (nm_canal, nr_canal, bt_aberto) 
    values (?, ?, ?)
    `

    let resposta = await con.query(comando, [conal.canal, conal.numero, conal.aberto])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarCanal (id, conal) {
  const comando = ` update tb_canal
                    set nome = ?,
                    numero = ?,
                    aberto = ?
                    where id_canal = ?;
                           `;

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}


export async function alterarCanal(conal,id) {
  const comando = `

  update tb_canal
  set nm_canal = ?,
      nr_canal = ?,
      bt_aberto = ?
  where id_canal = ?;
  `

  let resposta = await con.query(comando, [conal.canal, conal.numero, conal.aberto, id])
  let registros = resposta[0];
  
  let linhasAfetadas = registros.affectedRows
  
  return linhasAfetadas;
}

export async function deletarCanal (id, conal) {
  const comando = ` 
   delete from tb_canal
   where id_canal = ?
  `

  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  let linhasAfetadas = registros.affectedRows
  
  return linhasAfetadas;
}

