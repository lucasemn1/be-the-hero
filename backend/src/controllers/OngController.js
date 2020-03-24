const crypto = require('crypto');
const dbConnection = require('../database/connection');

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
        const id = crypto.randomBytes(4).toString('HEX');

        const returnValue = await dbConnection('ongs').insert({ id, name, email, whatsapp_number, city, uf });
    
        return res.json({ id, returnValue });
    },

    update(req, res) {

    },

    delete(req, res) {

    }
};