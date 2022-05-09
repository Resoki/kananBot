const { MessageEmbed } = require("discord.js");
const global = require('../../config');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member, client) {
    try {
      const channelJoin = client.channels.cache.find((ch) => ch.id === global.channelJoin);

      const embedJoin = new MessageEmbed().setTitle('Un nouveau membre nous rejoint !')
      .setDescription(`Bienvenue <@${member.id}> sur le serveur !`)
      .setThumbnail(member.displayAvatarURL({size: 512, dynamic: true}))
      .setColor('RANDOM')
      .setTimestamp()
      
    return channelJoin.send({embeds: [embedJoin]})
    }
    catch(err) {
      return console.log(`memberJoin, une erreur a eu lieu\n${err}`)
    }
  }
}
