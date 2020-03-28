const knex = require('knex');
const configuration = require('../../knexfile'); //importamos as configurações do banco de dado

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);//usamos o knex para armazenar em connection a configuração do bd de desenvolvimento

module.exports = connection; //exportamos a conexão com o banco de dados para ela ser acessivel por outros arquivos