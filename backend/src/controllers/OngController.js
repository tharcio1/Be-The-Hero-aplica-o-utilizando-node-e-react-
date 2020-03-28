const connection = require('../database/connection');
const generateUniqueid = require('../utils/generateUniqueid'); 

module.exports = {
    //não tem problema criar rotas para o mesmo caminho desde que elas estejam usando metodos diferentes
    async index (request,response) {
        const ongs = await connection('ongs').select('*'); //se conecta com o banco de dados na tabela ongs e seleciona todos os seus campos e armazena em ongs
    
        return response.json(ongs);
    },//fim metodo routes.get*/

    async create(request, response){
        //o async vem de assincrono, ou seja, se sincrono todo mundo executa ao mesmo tempo o assincrono vai executar cada coisa de uma vez enquanto o metodo que tiver o await antes estiver executando
        // nesse caso usamos o async junto ao await para que primeiro seja inserido os dados no bd e só depois disso seja retornado algo.

        //const params = request.body; //usado para pegar o corpo da requisicao, ou seja os metodos put e post que mandam algo para ser alterado sao exibidos a partir do body
        //const params = request.query; //usado para pegar os querys
        //const params = request.params; //usado para pegar o id

        //const data = request.body; //podia ser assim também, separamos os dados para melhor visualizar
        //console.log(data);

        const {name, email, whatsapp, city, uf} = request.body;

        const id = generateUniqueid();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })//usamos o connection importado para inserir dados no banco de dados a partir do metodo insert, após o connection colocamos entre parenteses e aspas o nome da tabela que queremos inserir dados

        return response.json({ id });
    }//fim create
};//fim exports