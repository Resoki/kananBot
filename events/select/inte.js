const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        try {
            if(!interaction.isButton());
            var row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel("Acheter")
                .setStyle("LINK")
                .setCustomId('click-buy')
            );

            if(interaction.customId === 'click-buy') {     
                return interaction.member.send({components: [row]});
            }

            
        }
        catch(err) {
            return interaction.reply(`Error:\n${err}`)
        }

    }
}
