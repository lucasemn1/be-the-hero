const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

// Controllers
const ongsController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessonController = require('./controllers/SessionController');

/*
    Tipos de parầmetros:

    * Query Params: parâmetros passados pela rota. Ex.: 'https://localhost:3000/users?name=lucas'. req.query
    * Route Params: parâmetros usados para identificar recursos. Ex.: 'https://localhost:3000/users/:nome'. req.params
    * Request Body: parâmetros que vêm através do corpo da req. req.body
*/

routes.get('/ongs', ongsController.index);
routes.post('/ongs/new', celebrate({
    [ Segments.BODY ]: Joi.object().keys({ 
        name: Joi.string().required().min(1),
        email: Joi.string().required().email(),
        whatsapp_number: Joi.string().required().min(13),
        city: Joi.string().required(),
        uf: Joi.string().required().min(2).length(2)
     })
}), ongsController.create);

routes.get('/incidents', celebrate({
    [ Segments.PARAMS ]: Joi.object().keys({
        id: Joi.number()
    })
}), incidentsController.index);
routes.delete('/incidents/delete/:id', celebrate({
    [ Segments.PARAMS ]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentsController.delete);
routes.post('/incidents/new', celebrate({
    [ Segments.HEADERS ]: Joi.object().keys({
        authorization: Joi.string().required()
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), incidentsController.create);
routes.get('/profile', celebrate({
    [ Segments.HEADERS ]: Joi.object().keys({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.index);

routes.post('/session', sessonController.create); //Fazer a verificação se tá vindo o id

module.exports = routes;