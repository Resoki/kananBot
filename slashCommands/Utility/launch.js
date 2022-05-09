const { MessageEmbed, Permissions, MessageActionRow, MessageSelectMenu} = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "launch",
    aliases: ["lh"],
    category: "Utility",
    description: "Launch Menu !",
    ownerOnly: false,
  run: async (client, interaction, args) => {
    const permission = interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)
    if (!permission) return  message.reply(`❌ | Tu n'as pas la permission de lancer un embed !`)
    //const logoRockstar = db.get(`rockstar_emoji`);
    //const logoRockstarConverted = `<:${logoRockstar.name}:${logoRockstar.id}>`;

    //const logoRedEngine = db.get(`redEngine_emoji`);
    //const logoRedEngineConverted = `<:${logoRedEngine.name}:${logoRedEngine.id}>`;

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
                description: `One Select`,
                value: 'select-one',
            },
            {
                label: 'UNLOCK-ALL / VANGUARD',
                description : 'Two Select',
                value: 'select-two',
            },
            {
                label: 'UNLOCK-ALL / MODERNE WARFARE',
                description : 'Three Select',
                value: 'select-three',
            },
            {
                label: 'UNLOCK-ALL / WARZONE (VANGUARD,BLACK OPS,MODERNE WARFARE)',
                description : 'Four Select',
                value: 'select-four',
            },
        ]),
    );

    return interaction.channel.send({ embeds: [embed], components: [row] });
  },
};