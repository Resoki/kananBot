// Example of how to make a Command

module.exports = {
  name: "ban",
  aliases: ["ban", "latency"],
  category: "Utility",
  description: "Ban a member !",
  ownerOnly: false,
  run: async (client, message, args) => {
    try {
      if(!args[0]) return message.channel.send(`Merci d'indiquer un membre à bannir !`);
      const reason = args[1];
      const member = message.mentions.members.first();

      await member.ban.then(async()=> {
        const banEmbed = new client.discord.MessageEmbed()
        .setTitle(`Un membre a été banni !`)
        .addField(`${member.username}`, `${new Date()}ms`, true)
        .addField("Raison", `${!reason ? 'Pas de raison evoqué!' : reason}ms`, true)
        .setColor('RED')
        .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

      await message.reply({ embeds: [banEmbed]});
      })

    }
    catch(err){
      return message.channel.send(`Une erreur a eu lieu \n${err}`)
    }
  },
};
