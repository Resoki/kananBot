module.exports = {
    name: "bot",
    aliases: ["ips"],
    category: "Utility",
    description: "La liste des bots existant sur le discord.",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {

        const botEmbed = new client.discord.MessageEmbed()
        .setTitle(`Les bots du serveur`)
        .setDescription(`Le serveur possède un bot unique, **Vigrid-O-Matic**, un bot musical, **Rythm**, un bot pour les **streameurs**, Streamcord et un bot de **timers** pour ne pas oublier vos repros.`, true)
        .setColor('RANDOM')
        .setTimestamp()

        return interaction.reply({ embeds: [botEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **bot.js** \n${err}`)
      }
    },
  };
  