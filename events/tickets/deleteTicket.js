const sourcebin = require('sourcebin_js');

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {ButtonInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (!interaction.isButton()) return;

        if (interaction.customId === 'ticket-delete' && interaction.channel.name.includes('close')) {
            const channel = interaction.channel;
            const member = interaction.guild.members.cache.get(channel.topic);
            const transcriptsChannel = client.channels.cache.get(client.config.ticketsTranscripts);

            const rowCloseFalse = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                .setStyle("DANGER")
                .setEmoji("🗑️")
                .setDisabled(true)
                .setCustomId("ticket-delete")
            );
            
            interaction.message.edit({ components: [rowCloseFalse] });

            interaction.deferUpdate();

            let msg = await channel.send({ content: 'Saving transcript...' });
            channel.messages.fetch().then(async (messages) => {
                const content = messages.reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

                let transcript = await sourcebin.create([{ name: `${channel.name}`, content: content, languageId: 'text' }], {
                    title: `Chat transcript: ${channel.name}`,
                    description: ' ',
                });
        
                const row = new client.discord.MessageActionRow()
                .addComponents(
                    new client.discord.MessageButton()
                    .setStyle("LINK")
                    .setEmoji("📑")
                    .setURL(`${transcript.url}`)
                );
        
                const embed = new client.discord.MessageEmbed()
                .setTitle("Ticket Transcript")
                .addFields(
                    { name: "📝 Channel", value: `${interaction.channel.name}` },
                    { name: "🔓 Ouvert par", value: `<@!${member.id}>` },
                    { name: "🔒 Fermé par", value: `<@!${interaction.member.user.id}>` },
                    { name: "📜 Direct Transcript", value: `[Direct Transcript](${transcript.url})` }
                )
                .setColor(client.config.embedColor)
                .setTimestamp()
                .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
                await transcriptsChannel.send({ embeds: [embed], components: [row] });
            });

            await msg.edit({ content: `Transcript sauvegardé vers <#${transcriptsChannel.id}>` });

            await channel.send({ content: 'Le ticket va être supprimé dans **5 secondes**..' });

            setTimeout(async function () {
                channel.delete();
            }, 5000);
        }
    }
}