module.exports = {
    name: 'interactionCreate',
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
