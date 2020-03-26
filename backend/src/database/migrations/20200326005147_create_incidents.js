//o migrate serve para armazenar as construções de tabelas para que por exemplo outros desenvolvedores possam
//saber o que foi alterado se alguma tabela nova foi criada e etc.

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //cria um campo que vai sendo incrementado de 1 em 1 no banco de dados conforme novos incidentes vão sendo cadastrados.
        table.string('title').notNullable();//cria o campo title e impede que esse campo seja nulo.
        table.string('description').notNullable();//cria o campo description e impede que esse campo seja nulo.
        table.decimal('value').notNullable();//cria o campo value e impede que esse campo seja nulo.

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });//metodo up é responsável pela criação da tabela
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};//metodo down é usado para desfazer algo feito no banco de dados, como por exemplo excluir uma tabela.
