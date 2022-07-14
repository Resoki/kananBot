module.exports = {
    name: "repro",
    aliases: ["rpr"],
    category: "Utility",
    description: "🛏️ Le guide de la reproduction.",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {

        const reproEmbed = new client.discord.MessageEmbed()
        .setTitle(`🛏️ Guide de reproduction`)
        .setDescription(`Vous retrouverez toutes les informations concernant les méthodes de reproduction à cette [addresse](https://vigrid-ark.fr/)`, true)
        .setColor('RANDOM')
        .setURL('https://vigrid-ark.fr/')
        .setTimestamp()

        return interaction.reply({ embeds: [reproEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **repro.js** \n${err}`)
      }
    },
  };
  