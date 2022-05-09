const { MessageEmbed, Permissions, MessageActionRow, MessageSelectMenu} = require('discord.js');

module.exports = {
    name: "shop",
    aliases: ["shopp"],
    category: "Utility",
    description: "Launch Menu Shop !",
    ownerOnly: false,
  run: async (client, interaction, args) => {
    const channel = await interaction.member.guild.channels.cache.find(channel => channel.id === '971030867638091826');
    if(interaction.channel !== channel) return interaction.reply(`Tu peux seulement envoyer le pannel de shop dans <#971030867638091826>`);
    const permission = interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)
    if (!permission) return  message.reply(`❌ | Tu n'as pas la permission de lancer un embed !`)

    const embed = new MessageEmbed()
    .setTitle('💰 Shop Information 💰')
    .setColor('BLUE')
    .setDescription('Choisi ce que tu souhaites voir ! Unlock ALL 🟢')
    const row = new MessageActionRow()
    .addComponents(
    new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Fais ton choix')
        .addOptions([
             {
                label: `UNLOCK-ALL / BLACK OPS`,
                description: `Buy an Unlock All 🟢`,
                value: 'select-one',
            },
            {
                label: 'UNLOCK-ALL / VANGUARD',
                description : 'Buy an Unlock All 🟢',
                value: 'select-two',
            },
            {
                label: 'UNLOCK-ALL / MODERNE WARFARE',
                description : 'Buy an Unlock All 🟢',
                value: 'select-three',
            },
            {
                label: 'UNLOCK-ALL / WARZONE (VANGUARD,BLACK OPS,MODERNE WARFARE)',
                description : 'Buy an Unlock All 🟢',
                value: 'select-four',
            },
        ]),
    );

    return interaction.channel.send({ embeds: [embed], components: [row] });
  },
};