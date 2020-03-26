//o migrate serve para armazenar as construções de tabelas para que por exemplo outros desenvolvedores possam
//saber o que foi alterado se alguma tabela nova foi criada e etc.

exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary(); //cria o campo id e transforma o id em chave primaria do banco de dados.
        table.string('name').notNullable();//cria o campo name e impede que esse campo seja nulo.
        table.string('email').notNullable();//cria o campo email e impede que esse campo seja nulo.
        table.string('whatsapp').notNullable();//cria o campo whatsapp e impede que esse campo seja nulo.
        table.string('city').notNullable();//cria o campo city e impede que esse campo seja nulo.
        table.string('uf', 2).notNullable();//cria o campo uf e define o tamanho de 2 digitos e impede que esse campo seja nulo.
    });//metodo up é responsável pela criação da tabela
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};//metodo down é usado para desfazer algo feito no banco de dados, como por exemplo excluir uma tabela.
