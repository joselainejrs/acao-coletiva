module.exports = {

    async index( request, response ) {
            const dados_pessoais = await connection('dados_pessoais').select('*');
        
            return response.json(dados_pessoais);
       
    
       
    },
}