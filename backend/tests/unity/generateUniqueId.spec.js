const generateUniqueId = require('../../src/util/generateUniqueId');

describe('Generete Unique ID', () => {
    it('should generate unique id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});