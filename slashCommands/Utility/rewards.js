module.exports = {
    name: "rewards",
    aliases: ["rwd"],
    category: "Utility",
    description: "🎁 Comment utiliser le reward vault ?",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {

        const recoEmbed = new client.discord.MessageEmbed()
        .setTitle(`🎁 Reward vault`)
        .setDescription(`Vous retrouverez toute les informations concernant le Reward Vault à cette [adresse](https://vigrid-ark.fr/presentation-de-tcs-auto-rewards/)`, true)
        .setColor('RANDOM')
        .setURL('https://vigrid-ark.fr/presentation-de-tcs-auto-rewards/')
        .setTimestamp()

        return interaction.reply({ embeds: [recoEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **rewards.js** \n${err},`)
      }
    },
  };
  