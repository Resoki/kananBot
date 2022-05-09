module.exports = {
    name: 'interactionCreate',
    
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        try {
            if(interaction.isButton()) return;
            if(interaction.values[0] === 'select-rockstar') {
                console.log('cc')
                interaction.member.send('Rockstar')
            }

            if(interaction.values[0] === 'select-rockstar') {
                interaction.member.send('Rockstar')
            }
        }
        catch(err) {
            return interaction.reply(`Error:\n${err}`)
        }

    }
}
