const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create); // usamos post porque vamos "criar" uma nova sessão de login

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentController.index); //quando ele acessar o caminho /incidents usando o metodo get, ele irá executar o IncidentController.index
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes; //exportamos a variavel routes 
    
    // quando colocamos somente a barra estamos dizendo que estamos criando a rota raiz do node
    // o segundo parametro é uma funcao com a pergunta a ser enviada e a resposta, essa funcao ira retornar no nosso
    // caso um hello world ou depois da mudanca feita ali, ira retornar um objeto ja que estamos trabalhando com backend
    // e o backend não trata mensagens diretamente ao usuário e sim retorna algo pro proprio sistema
