const connections = require('../database/connections');

module.exports = {

    async index( request, response ) {
        const endereco = await  connections('endereco').select('*')
        return response.json(endereco);
       
    },

    async create( request, response ) {
        const {cep, endereco, numero, complemento, cidade, estado} = request.body;
    
         await connections('endereco').insert({
            cep, 
            endereco, 
            numero, 
            complemento,
            cidade,
            estado,
        })
        return response.json();
       
    },
}