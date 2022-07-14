module.exports = {
    name: "recolorisation",
    aliases: ["recolor"],
    category: "Utility",
    description: "🌸 Pimp your ride!",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {

        const recoEmbed = new client.discord.MessageEmbed()
        .setTitle(`🌸 Pimp your ride!`)
        .setDescription(`Votre dino n'est pas très beau? [Let's pimp your ride!](https://vigrid-ark.fr/envie-de-couleur/) `, true)
        .setColor('RANDOM')
        .setURL('https://vigrid-ark.fr/envie-de-couleur/')
        .setTimestamp()

        return interaction.reply({ embeds: [recoEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **recolorisation.js** \n${err}`)
      }
    },
  };
  