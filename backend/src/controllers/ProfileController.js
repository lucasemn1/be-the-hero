const dbConnection = require('../database/connection');

module.exports = {
    async index(req, res){
        const ongId = req.headers.authorization;
        const incidents = await dbConnection('incidents').select('*').where('ong_id', ongId);

        return res.json( { incidents } );
    },
}