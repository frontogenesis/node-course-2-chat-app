var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const message = generateMessage('Ray', 'A message');
        // expect(message.from).toBe('Ray');
        // expect(message.text).toBe('A message');
        expect(message).toInclude({from: 'Ray', text: 'A message'});
        expect(message.createdAt).toBeA('number');
    });
});