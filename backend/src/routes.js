const express = require('express');
const routes = express.Router();

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
routes.post('/ongs/new', ongsController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents/new', incidentsController.create);
routes.delete('/incidents/delete/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/session', sessonController.create);

module.exports = routes;