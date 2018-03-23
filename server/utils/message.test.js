var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const message = generateMessage('Ray', 'A message');
        // expect(message.from).toBe('Ray');
        // expect(message.text).toBe('A message');
        expect(message).toInclude({from: 'Ray', text: 'A message'});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        const from = 'Admin';
        const latitude = 43.5;
        const longitude = -90.6;
        const location = generateLocationMessage(from, latitude, longitude);
        expect(location).toInclude({
            url: `https://www.google.com/maps?q=${latitude},${longitude}`,
            from: from
        });
        expect(location.createdAt).toBeA('number');
    });
});