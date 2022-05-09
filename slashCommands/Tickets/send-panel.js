module.exports = {
    name: "send-panel",
    usage: '/send-panel <channel>',
    options: [
        {
            name: 'channel',
            description: 'Channel où envoyer le panel',
            type: 'CHANNEL',
            channelTypes: ["GUILD_TEXT"],
            required: true
        }
    ],
    category: "Tickets",
    description: "Send le pannel de ticket dans un channel specifique !",
    userPerms: ["ADMINISTRATOR"],
    ownerOnly: false,
    run: async (client, interaction) => {
        const channel = interaction.options.getChannel("channel");

        const row = new client.discord.MessageActionRow()
        .addComponents(
            new client.discord.MessageButton()
            .setStyle("SECONDARY")
            .setEmoji("📩")
            .setCustomId("create-ticket")
        );

        const embed = new client.discord.MessageEmbed()
        .setTitle("Create ticket")
        .setDescription("Pour créer un ticket, réagis avec 📩")
        .setColor(client.config.embedColor)
        .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        interaction.reply({ content: `Le pannel de ticket a été envoyé dans le channel > ${channel}!`, ephemeral: true });
        return channel.send({ embeds: [embed], components: [row] });
    }
}