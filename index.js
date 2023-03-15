(async () => {
    const database = require('./db');
    const produto = require('./produto');

    await database.sync();


    await produto.create(
        {
            Nome: "Primeiro Teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome: "Segundo Teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome: "Terceiro Teste",
            DataCriacao: Date()
        }
    )

    const alterProd = await produto.findByPk(2);
    alterProd.Nome = "Arquivo 2 Alterado";
    await alterProd.save();

    produto.destroy({ where: { id: 1 } });

    const findProd = await produto.findByPk(3);
    console.log(findProd);

    const findAllProd = await produto.findAll();
    console.log(findAllProd);

})();