
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
        .setDescription(`Tu peux créer un avis via la commande **/avis** et donner une note entre 1 et 5 !`)
        .setColor('YELLOW')
        .setTimestamp()
        .setThumbnail('https://www.adportesfenetres.com/wp-content/uploads/2014/10/cinq_etoiles-300x83-1-e1607099568270.png')
        .setFooter({ text: `Panel Avis`, iconURL: `${client.user.displayAvatarURL()}` });
  
        await interaction.reply({ embeds: [avisEmbed]});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **avis.js** \n${err}`)
      }
    },
  };
  