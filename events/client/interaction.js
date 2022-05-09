module.exports = {
    name: 'interactionCreate',
    
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction) {
        try {
            if(interaction.isButton()) return;
            if(interaction.customId === 'select-rockstar') {
                console.log('cc')
                interaction.member.send('Rockstar')
            }

            if(interaction.customId === 'select-rockstar') {
                interaction.member.send('Rockstar')
            }
        }
        catch(err) {
            return interaction.reply(`Error:\n${err}`)
        }
    }
}
