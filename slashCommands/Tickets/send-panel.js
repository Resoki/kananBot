module.exports = {
    name: "send-panel",
    usage: '/send-panel <channel>',
    options: [
        {
            name: 'channel',
            description: 'Channel où envoyer le panel de ticket',
            type: 7,
            usage: '**/send-panel**',
            channelTypes: ["GUILD_TEXT"],
            required: true
        },
        {
            name: 'title',
            description: 'titre du pannel',
            type: 3,
            usage: '**/send-panel**',
            channelTypes: ["GUILD_TEXT"],
            required: true
        },
        {
            name: 'description',
            description: 'desc du pannel',
            type: 3,
            usage: '**/send-panel**',
            channelTypes: ["GUILD_TEXT"],
            required: true
        }
    ],
    category: "Tickets",
    description: "Send le pannel de ticket dans un channel specifique !",
    userPerms: ["ADMINISTRATOR"],
    ownerOnly: false,
    run: async (client, interaction) => {
        try {
        const channel = interaction.options.getChannel("channel");
        const title = interaction.options.getString("title");
        const description = interaction.options.getString("description");

        const row = new client.discord.MessageActionRow()
        .addComponents(
            new client.discord.MessageButton()
            .setStyle("SECONDARY")
            .setEmoji("📩")
            .setCustomId("create-ticket")
        );

        const embed = new client.discord.MessageEmbed()
        .setTitle(`${title} 🎫`)
        .setThumbnail('https://static.vecteezy.com/system/resources/previews/001/189/271/non_2x/tickets-png.png')
        .setDescription(description)
        .setColor(client.config.embedColor)
        .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        interaction.reply({ content: `Le pannel de ticket a été envoyé dans le channel > ${channel}!`, ephemeral: true });
        return channel.send({ embeds: [embed], components: [row] });
        }
        catch(err){
            return interaction.reply('Erreur **send-pannel.js**', err)
        }
    }
}