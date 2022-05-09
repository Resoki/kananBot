const db = require('quick.db');
module.exports = {
    name: "avis",
    aliases: ["avs"],
    category: "Utility",
    description: "Create avis !",
    ownerOnly: false,
    options: [
      {
          name: "content",
          description: "Ecrivez votre avis ici",
          type: "STRING",
          required: true,
      },
      {
        name: "star",
        description: "Nombre d'etoile (1-5)",
        type: "NUMBER",
        required: true,
    }
    
  ],
    run: async (client, interaction, args) => {
      try {
        const channel = interaction.member.guild.channels.cache.find(channel => channel.id === '971511033803976734');
        if(interaction.channel !== channel) return interaction.reply(`Tu peux seulement créer un avis dans le channel <#971511033803976734>`);
        const content = interaction.options.getString('content');
        const star = interaction.options.getNumber('star');
        if(star !== 1 || 2 || 3 || 4 || 5) return interaction.reply(`Le nombre d'etoile doit être compris entre 1 et 5`)
        const starEmoji = "⭐";

        const avisEmbed = new client.discord.MessageEmbed()
        .setTitle(`Avis de ${interaction.member.user.username} \n${starEmoji.repeat(star)}`)
        .addField("Avis:", `*${content}*`, true)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage('')
        .setThumbnail(interaction.member.user.displayAvatarURL({size: 512, dynamic: true}))
        .setFooter({ text: `Create avis`, iconURL: `${interaction.member.user.displayAvatarURL()}` });

        await db.add(`nbAvis`, 1);
  
        await interaction.reply({ embeds: [avisEmbed]});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **avis.js** \n${err}`)
      }
    },
  };
  