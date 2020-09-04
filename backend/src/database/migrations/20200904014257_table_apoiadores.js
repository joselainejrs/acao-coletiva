exports.up = function(knex) {
    return knex.schema.createTable('apoiadores', function (table) {
        table.increments('id').primary();

        table.integer('dados_id')
        .notNullable()
        .references('id')
        .inTable('dados_pessoais');
      })
};

exports.down = function(knex) {
    return knex.schema.droptable('apoiadores');
};
