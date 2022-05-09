
module.exports = {
    name: "panel-avis",
    aliases: ["avs"],
    category: "Utility",
    description: "Show pannel avis !",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {
        const avisEmbed = new client.discord.MessageEmbed()
        .setTitle(`Avis`)
        .setDescription(`Tu peux créer un avis via la commande **/avis**`)
        .setColor('ORANGE')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL({size: 512, dynamic: true}))
        .setFooter({ text: `Create avis`, iconURL: `${client.user.displayAvatarURL()}` });
  
        await interaction.reply({ embeds: [avisEmbed]});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **avis.js** \n${err}`)
      }
    },
  };
  