module.exports = {
    name: "dododex",
    aliases: ["dodo"],
    category: "Utility",
    description: "🪚 Les outils pour le taming.",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {

        const dinoEmbed = new client.discord.MessageEmbed()
        .setTitle(`🪚 Dododex`)
        .setDescription(`Dododex est un outil très utile qui vous accompagnera dans vos tames. Il dispose d'un calculateur de taming, ainsi que de nombreuses informations sur tous les dinos. Vous pouvez aller sur sa version [web](https://www.dododex.com) ou télécharger l'application sur votre [mobile](https://play.google.com/store/apps/details?id=com.danlev.dododex) `, true)
        .setColor('RANDOM')
        .setTimestamp()

        return interaction.reply({ embeds: [dinoEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **dinotracker.js** \n${err}`)
      }
    },
  };
  