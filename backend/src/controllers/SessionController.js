const dbConnection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await dbConnection('ongs').select('*').where('id', id).first();

        if( !ong ) {
            return res.status(400).json('No ONG found with this id');
        }

        return res.json({ ong });
    }
}