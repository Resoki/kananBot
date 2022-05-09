const { MessageEmbed, Permissions, MessageActionRow, MessageSelectMenu} = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'launch',
  description: 'Laucnh embed',
  run: async (client, message, args) => {
    const permission = message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)
    if (!permission) return  message.reply(`❌ | Tu n'as pas la permission de lancer un embed !`)
    const logoRockstar = db.get(`rockstar_emoji`);
    const logoRockstarConverted = `<:${logoRockstar.name}:${logoRockstar.id}>`;

    const logoRedEngine = db.get(`redEngine_emoji`);
    const logoRedEngineConverted = `<:${logoRedEngine.name}:${logoRedEngine.id}>`;

    const embed = new MessageEmbed()
    .setTitle('Choose the object you want the price')
    .setColor('BLUE')
    .setDescription('Choose a product listed on this menu for more information about it\nThe prices are send in MP, please allow DM on the server')
    .setImage('https://media.discordapp.net/attachments/971150039583965186/971502722576691240/banniere.jpg')

    const row = new MessageActionRow()
    .addComponents(
    new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Choose the object you want the price')
        .addOptions([
         {
                label: `Rockstar`,
                description: `FiveM Ready Account FA and GTAV Download FA`,
                value: 'select-rockstar',

            },
            {
                label: 'redENGINE',
                description : 'redENGINE is an Executor for FiveM',
                value: 'select-rendengine',
      
            },
        ]),
    );

    return message.channel.send({ embeds: [embed], components: [row] });
  },
};