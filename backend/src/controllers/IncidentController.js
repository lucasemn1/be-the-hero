const dbConnection = require('../database/connection');

module.exports = {
    //Ok
    async index(req, res){
        const { page = 1 } = req.query;

        const [count] = await dbConnection('incidents').count();

        //Paginação
        const incidents = await dbConnection('incidents')
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp_number', 
                'ongs.city', 
                'ongs.uf'
            ])
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset( ( page - 1 ) * 5 );

        res.header('X-Total-Count', count['count(*)']);
        return res.json( { incidents } );
    },

    // Ok
    async create(req, res){
        const ongId = req.headers.authorization; 
        const { title, description, value } = req.body;

        const id = await dbConnection('incidents').insert({ title, description, value, ong_id: ongId });

        return res.json( { id } );
    },

    // Ok
    async delete(req, res){
        const { id } = req.params;
        const ongId = req.headers.authorization;
        const incident = await dbConnection('incidents').select('ong_id').where('id', id).first();
    
        // Validando se a ong logada pode apagar o incident
        if( incident.ong_id !== ongId ) {
            return res.status(401).json({ error: "Operation not permited." });
        }

        await dbConnection('incidents').where('id', id).delete();

        return res.status(204).send();
    },
};