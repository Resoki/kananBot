module.exports = {
  name: "tuto",
  aliases: ["tuto"],
  category: "Utility",
  description: "Les tutoriels de la communauté.",
  ownerOnly: false,
  run: async (client, interaction, args) => {
    try {

      const tutoEmbed = new client.discord.MessageEmbed()
      .setTitle(`📚 Tutos`)
      .setDescription(`Les tutoriels de la communauté\n
      Vous pouvez retrouver l'ensemble des guides et des tutoriels de la communauté sur notre site web :https://vigrid-ark.fr/.
      Liste des tutoriels disponibles: **/tame, /dododex, /repro, /dinotracker, /rewards**`, true)
      .setColor('RANDOM')
      .setTimestamp()

      return interaction.reply({ embeds: [tutoEmbed]});
    }
    catch(err){
      return interaction.channel.send(`Une erreur a eu lieu **ip.js** \n${err}`)
    }
  },
};
