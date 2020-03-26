const express = require('express'); //importamos o framework/modulo express para dentro da variavel express
const cors = require('cors');
const routes = require('./routes');//importamos as rotas da classe routes para dentro da variavel routes

const app = express(); //criamos a variavel que vai conter a aplicação

app.use(cors()); // o cors define quem vai poder acessar nossa aplicação, como ainda não definimos ninguém, todos os front ends poderão acessar a aplicação
app.use(express.json());//informamos a aplicação que estaremos utilizando o json para o corpo das requisições.
// o app.use(express.json()) deve vir antes das rotas

app.use(routes);// imformamos a aplicação que estaremos utilizando as rotas da classe routes
//o app.use(routes) deve vir depois do app.use(express.json())


app.listen(3333); //estamos dizendo que a aplicação vai ouvir na porta 3333

//app.get('/contato'); //criamos uma rota chamada 

// para executar a aplicação no terminal digite: node index.js

/**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parârametros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (utilizados para Filtros e paginação por exemplo).
 * exemplo de Query Params: http://localhost:3333/users?page=2&nome=Diego&idade=25
 * 
 * Route Params: Parâmetros utilizados para identificar recursos.
 * exemplo de Route Params: http://localhost:3333/users/1
 * o que está depois do  "/" é considerado como o id do usuario, no exemplo a cima seria retornado o usuário com id = 1.
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

 /**
  * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver : Select * from users
   * Query Builder: table('users').select('*').where()
   */


