module.exports = {
    name: 'interactionCreate',
    
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        try {
            if(interaction.isButton()) return;
            if(interaction.values[0] === 'select-one') {
                return interaction.member.send('one');
            }

            if(interaction.values[0] === 'select-two') {
                return interaction.member.send('two');
            }

            if(interaction.values[0] === 'select-three') {
                return interaction.member.send('three');
            }
        }
        catch(err) {
            return interaction.reply(`Error:\n${err}`)
        }

    }
}
