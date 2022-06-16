module.exports = {
    name: 'interactionCreate',

    /**
     * @param {ButtonInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (!interaction.isButton()) return;

        if (interaction.customId === 'reclame-ticket') {
         
            const embedSuccess = new client.discord.MessageEmbed()
            .setTitle("Ticket reclamé")
            .setDescription(`Ticket reclamé par <@${interaction.member.user.id}>`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
            
          return interaction.reply({embeds: [embedSuccess]});
        }
    }
}