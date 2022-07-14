module.exports = {
    name: "dinotracker",
    aliases: ["dino"],
    category: "Utility",
    description: "🦖 Si tu as égaré un dino.",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {
        const dinoEmbed = new client.discord.MessageEmbed()
        .setTitle(`🦖 Le dinotracker`)
        .setDescription(`Impossible de remettre la main sur votre dino? Vous pouvez craft un dinotacker pour le retrouver facilement [Click here](https://vigrid-ark.fr/presentation-dinotracker/)`, true)
        .setColor('RANDOM')
        .setURL('https://vigrid-ark.fr/presentation-dinotracker/')
        .setTimestamp()

        return interaction.reply({ embeds: [dinoEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **dinotracker.js** \n${err}`)
      }
    },
  };
  