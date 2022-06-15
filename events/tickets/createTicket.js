module.exports = {
    name: 'interactionCreate',

    /**
     * @param {ButtonInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (!interaction.isButton()) return;
        try {

        if (interaction.customId === 'create-ticket') {
            let ticketName = `ticket-${interaction.user.username}`.toLowerCase();
            let supportRoles = await client.config.ticketsSupportRoles.map(x => {
                return {
                    id: x,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "EMBED_LINKS", "MANAGE_MESSAGES"]
                }
            });

            await interaction.reply({ content: `Creating ticket...`, ephemeral: true });

            if (interaction.guild.channels.cache.find(c => c.topic == interaction.user.id && c.name.includes("ticket"))) return interaction.editReply({ content: `You have already created a ticket!`, ephemeral: true });

            const createdChannel = await interaction.guild.channels.create(ticketName, {
                type: "text",
                topic: `${interaction.user.id}`,
                parent: client.config.ticketsOpenCategory,
                permissionOverwrites: [
                    {
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "EMBED_LINKS"],
                        id: interaction.user.id,
                    },
                    {
                        deny: "VIEW_CHANNEL",
                        id: interaction.guild.id,
                    },
                    ...supportRoles
                ],
            });
            
            await interaction.editReply({ content: `Ticket crée avec success dans ${createdChannel}!` , ephemeral: true });

            const row = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                .setStyle("DANGER")
                .setEmoji("🔒")
                .setCustomId("ticket-close")
            );

            const embed = new client.discord.MessageEmbed()
            .setTitle("Nouveau Ticket!")
            .setDescription(`Hello <@!${interaction.user.id}>, un staff va vous assister bientôt !!\n\n**Clique sur 🔒 pour fermer le ticket !**`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

            await createdChannel.send({ content: `${client.config.ticketsSupportRoles.map((m) => `<@&${m}>`).join(", ")}. New Ticket!`, embeds: [embed], components: [row] });
        }
    }
    catch(err){
        return interaction.reply(`Une erreur a eu lieu:\n${err}`);
    }
    }
}