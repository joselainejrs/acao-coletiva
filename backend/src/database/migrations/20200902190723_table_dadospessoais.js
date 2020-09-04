
exports.up = function(knex) {
    return knex.schema.createTable('dados_pessoais', function (table) {
        table.increments('id').primary;
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('cpf').notNullable().unique();
        table.string('data_nascimento').notNullable();


        table.timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNullable();

      })
};

exports.down = function(knex) {
    return knex.schema.droptable('dados_pessoais');
  
};


