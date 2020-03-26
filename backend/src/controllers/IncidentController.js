const connection = require('../database/connection');

module.exports = {
    //não tem problema criar rotas para o mesmo caminho desde que elas estejam usando metodos diferentes
    async index (request,response) {
        const { page = 1 } = request.query; // busca o parametro no query de pagina caso não ache usa por padrão o valor 1

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5) // limita a consulta a retornar apenas 5 resultados
        .offset((page - 1) * 5) // pula de 5 em 5 os registros e vai pegando outros, começando do 1 - 1 = 0 * 5 = 0 ou seja vai pegar do registro 0 ate o 4 que da 5 e depois caso a page seja numerada com 2, ele faz: 2 - 1 = 1 * 5 = 5 e pega do registro 5 ate o 9 e assim por diante se a page continuar sem numeração a page 1 continua como padrão e continua a retornar o mesmos resultados
        .select(['incidents.*', 
        'ongs.name', 
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',  //usamos o join para cruzar os dados das duas tabelas e trazer alem dos dados do incidente também os dados da ong que criou o incidente no sistema
        'ongs.uf']); //se conecta com o banco de dados na tabela incidents e seleciona todos os seus campos e armazena em incidents ja da tabela ongs armazena apenas o que é especificado para que o campo id não se sobreponha ja que ne ongs e incidentes eles possuem o mesmo nome
    
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },//fim metodo routes.get*/


    async create (request,response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        }); //usamos o const[id] para pegar o id do incidente cadastrado ja que usamos os increment la na migration do incidente, como só estamos cadastrando um unico caso esse array de id's só terá um valor

        return response.json({ id }); //usamos as chaves em volta do id para que ele retorne o objeto id e não só o valor id, pois desse modo o front end saberá que o que está sendo retornado é um id, ex -> "id" : 01
    },//fim create

    async delete(request,response){
        const { id } = request.params;
        const ong_id  = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();//retorna apenas 1 resultado pois sabemos que só tem 1 caso registrado para cada id pois usamos o increment

            if(incident.ong_id != ong_id){
                return response.status(401).json({ error : 'Operation not permitted' });// retorna erro de NÃO AUTORIZADO(401) caso o id da ong que esteja acessando a pagina e tentando deletar for diferente da id da ong cadastrada no incidente
            }//fim if
            await connection('incidents').where('id', id).delete();// deleta o incidente com o id correspondente

            return response.status(204).send(); // o 204 pode ser usado por exemplo para retornar uma reposta ao front end que não tem conteudo mas que deu sucesso, no caso usamos o send() para enviar ao front end um body vazio.
    
    }//fim metodo delete
};