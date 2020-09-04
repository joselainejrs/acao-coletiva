const connections = require('../database/connections');

module.exports = {
    async index(request, response) {
        const totalApoiadores = await connections('dados_pessoais').count()
    
        return response.json(totalApoiadores);
    },

}