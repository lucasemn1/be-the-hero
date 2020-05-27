const dbConnection = require('../database/connection');
const generateUniqueId = require('../util/generateUniqueId');

module.exports = {
    // Ok
    async index(req, res) {
        const ongs = await dbConnection('ongs').select('*');

        return res.json( { ongs } );
    },

    get(req, res) {

    },

    // Ok
    async create(req, res) {
        const { name, email, whatsapp_number, city, uf } = req.body;
        const id = generateUniqueId();

        const returnValue = await dbConnection('ongs').insert({ id, name, email, whatsapp_number, city, uf });
    
        return res.json({ id, returnValue });
    },

    update(req, res) {

    },

    delete(req, res) {

    }
};