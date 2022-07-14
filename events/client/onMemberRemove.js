const { MessageEmbed } = require("discord.js");
const global = require('../../config');

module.exports = {
  name: 'guildMemberRemove',
  async execute(member, client) {
    try {
      const channelMemberRemove = client.channels.cache.find((ch) => ch.id === global.channelMemberRemove);

      const embedJoin = new MessageEmbed().setTitle('Un membre vient de partir !')
      .setDescription(`<@${member.id}> a quitté le serveur`)
      .setThumbnail(member.displayAvatarURL({size: 512, dynamic: true}))
      .setColor('RANDOM')
      .setTimestamp()
      
    return channelMemberRemove.send({embeds: [embedJoin]})
    }
    catch(err) {
      return console.log(`onMemberRemove, une erreur a eu lieu\n${err}`)
    }
  }
}
