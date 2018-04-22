describe('list of commands', () => {
    process.argv = ['node', '', 'comunidades', '-l'];
    const program = require("../commands/commands");
    let communityCommand;

    it('should have a "comunidades" command', () => {
        communityCommand = program.commands.find(command => command._name === 'comunidades');
        expect(communityCommand).toBeTruthy();
    });

    it('should have a "comunidades" command with a "list" option', () => {
        expect(typeof communityCommand._events).toBe('object');
        const listOption = Object.keys(communityCommand._events).some(option => option === 'option:list');
        expect(listOption).toBeTruthy();
    });
});
