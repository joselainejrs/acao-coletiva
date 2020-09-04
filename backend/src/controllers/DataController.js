const connections = require('../database/connections');

module.exports = {

    async index( request, response ) {

        //solicitação de paginação
        const {page = 1} = request.query;

         // mostrar no front o total de caso cadastrado
         const [count] = await connections('dados_pessoais').count();

         const index = await connections('dados_pessoais')
        //conectando os id's iguais
        .join('endereco', 'dados_pessoais.id', '=','endereco.dados_id')
        .limit(6)
        .offset((page - 1) * 5)
        .select([
            'dados_pessoais.*',
            'endereco.*']);

          // mostrar no front o total de caso cadastrado
        response.header('X-Total-Count', count['count(*)']);

         return response.json(index);
    },

    async create( request, response ) {
        const {
            nome, 
            sobrenome, 
            cpf, 
            data_nascimento,
            cep,
            endereco,
            numero,
            complemento,
            cidade,
            estado 
        
        } = request.body;

        const insertgroup = await connections.transaction();

        try{
            
            const IdsUserInsert = await insertgroup('dados_pessoais').insert({
                nome, 
                sobrenome, 
                cpf, 
                data_nascimento,
            });

            const dados_id = IdsUserInsert[0];

            await insertgroup('endereco').insert({
                cep,
                endereco,
                numero,
                complemento,
                cidade,
                estado,
                dados_id
            });

            await insertgroup.commit();

            return response.status(201).send();
         }catch(err){
            await insertgroup.rollback();

             return response.status(400).json({
                 error:'Cadastro não consluido'
             })
         }
       
    },
}