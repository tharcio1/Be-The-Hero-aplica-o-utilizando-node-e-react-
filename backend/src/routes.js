const express = require('express');

const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create); // usamos post porque vamos "criar" uma nova sessão de login

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), // dizemos que o nome tem que ser uma string e que a ong é obrigada a ter um nome
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),OngController.create); // o celebrate serve para validar um dado, ou seja, verificar se aquele pode ser usado naquele momento e então passar para a criação nesse caso da ong

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index); //quando ele acessar o caminho /incidents usando o metodo get, ele irá executar o IncidentController.index

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(), 

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().max(25),
        description:Joi.string().required(),
        value: Joi.number().required().min(1),
    }),

}),IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


module.exports = routes; //exportamos a variavel routes 
    
    // quando colocamos somente a barra estamos dizendo que estamos criando a rota raiz do node
    // o segundo parametro é uma funcao com a pergunta a ser enviada e a resposta, essa funcao ira retornar no nosso
    // caso um hello world ou depois da mudanca feita ali, ira retornar um objeto ja que estamos trabalhando com backend
    // e o backend não trata mensagens diretamente ao usuário e sim retorna algo pro proprio sistema
