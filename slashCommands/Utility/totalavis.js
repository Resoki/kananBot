const db = require('quick.db');

module.exports = {
    name: "totalavis",
    aliases: ["avs"],
    category: "Utility",
    description: "Create avis !",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {
         const nbavis = await db.get(`nbAvis`);
        const avisEmbed = new client.discord.MessageEmbed()
        .setTitle(`Avis Info`)
        .addField("Nombre d'avis:", `**${nbavis}**`, true)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(interaction.member.user.displayAvatarURL({size: 512, dynamic: true}))
        .setFooter({ text: `Create avis`, iconURL: `${interaction.member.user.displayAvatarURL()}` });
  
        await interaction.reply({ embeds: [avisEmbed]});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **avis.js** \n${err}`)
      }
    },
  };
  