const connections = require('../database/connections');

module.exports = {

    async index( request, response ) {
             //solicitação de paginação
             const {page = 1} = request.query;

         // mostrar no front o total de caso cadastrado
         const [count] = await connections('dados_pessoais').count();

         const index = await connections('dados_pessoais')
        //conectando os id's iguais
        .join('endereco', 'en_id', '=', 'dados_pessoais.en_id')
        .limit(6)
        .offset((page - 1) * 5)
        .select([
            'dados_pessoais.*',
            'endereco.cep', 
            'endereco.endereco', 
            'endereco.numero', 
            'endereco.complemento', 
            'endereco.cidade',
            'endereco.estado',
        ]);

          // mostrar no front o total de caso cadastrado
        response.header('X-Total-Count', count['count(*)']);

        return response.json(index);
       
    },

    async create( request, response ) {
        const {nome, sobrenome, cpf, data_nascimento } = request.body;
        const en_id = request.headers.authorization;
    
        const [id] = await connections('dados_pessoais').insert({
            nome, 
            sobrenome, 
            cpf, 
            data_nascimento,
            en_id
        })
        return response.json();
       
    },
}