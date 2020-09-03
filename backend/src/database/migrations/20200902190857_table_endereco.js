exports.up = function(knex) {
    return knex.schema.createTable('endereco', function (table) {
        table.increments('id');
        table.string('cep').notNullable();
        table.string('endereco').notNullable();
        table.string('numero').notNullable();
        table.string('complemento').notNullable();
        table.string('cidade').notNullable();
        table.string('estado').notNullable();

      })
  
};

exports.down = function(knex) {
    return knex.schema.droptable('endereco');
  
};
