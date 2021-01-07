const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  // await saveOrphanage(db, {
  //     lat: "-23.6684843",
  //     lng: "-46.8159910",
  //     name: "Lar dos meninos",
  //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //     whatsapp: "116732849",
  //     images: [
  //     "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     "https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  //     ].toString(),
  //     instructions : "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //     opening_hours: "Horário de visitas das 18h até 8h",
  //     open_on_weekends: "0"
  // })
  //consultar dados da tabela
  // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  // console.log(selectedOrphanages)
  // // //consultar somente 1 orfanato, pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  // console.log(orphanage)
  // //deletar dados da tabelas
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
});
