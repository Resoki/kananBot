module.exports = {
  name: "rates",
  aliases: ["rates"],
  category: "Utility",
  description: "🆙 Les rates du serveur ARK Vígríd.",
  ownerOnly: false,
  run: async (client, interaction, args) => {
    try {

      const ipEmbed = new client.discord.MessageEmbed()
      .setTitle(`🆙 Les rates des serveurs ARK Vígríd`)
      .setDescription(`Bonjour <@${interaction.member.user.id}>, voici les rates de nos serveurs.
      ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ\n
      :white_small_square: Niveau maximum du personnage : 180
      :white_small_square: Niveau maximum d’un dinosaure sauvage : 150
      :white_small_square: Multiplicateur d’expérience : x2
      :white_small_square: Multiplicateur de récolte : x2
      :white_small_square: Multiplicateur d’apprivoisement d’un dinosaure : x2
      :white_small_square: Multiplicateur de croissance d’un bébé dinosaure : x4
      :white_small_square: Intervalle entre reproduction : x0.5
      :white_small_square: Reboot journalier : 6h20 am
      :white_small_square: Dégâts sur les structures : désactivés\n
      ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ`)
      .setColor('RANDOM')
      .setTimestamp()

      return interaction.reply({ embeds: [ipEmbed]});
    }
    catch(err){
      return interaction.channel.send(`Une erreur a eu lieu **ip.js** \n${err}`)
    }
  },
};
