const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body; //pegamos apenas o id do body

        const ong = await connection('ongs')
        .where('id',id)
        .select('name')
        .first();// usamos o first para nos retornar um unico nome e não um array

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID' }); //retornamos um bad request
        }//fim if

        return response.json(ong);
    }//fim create
}