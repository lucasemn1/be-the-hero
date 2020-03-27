const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ong', async () => {
        const date = Date.now();
        const response = await request(app)
            .post('/ongs/new')
            // .set('authorization', id) -> Para headers
            .send({
                name: `TESTE ${date}`,
                email: `teste${date}@email.com`,
                whatsapp_number: '0000000000000',
                city: 'Teste',
                uf: 'RN',
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});