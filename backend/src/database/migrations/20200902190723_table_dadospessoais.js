
exports.up = function(knex) {
    return knex.schema.createTable('dados_pessoais', function (table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('cpf').notNullable();
        table.string('data_nascimento').notNullable();

        table.string('en_id').notNullable();
        table.foreign('en_id').references('id').inTable('endereco');

      })
  
};

exports.down = function(knex) {
    return knex.schema.droptable('dados_pessoais');
  
};
