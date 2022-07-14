module.exports = {
    name: "pseudo",
    aliases: ["psd"],
    category: "Utility",
    description: "✍️ Comment changer de pseudonyme sur discord ?",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {

        const imgOne = new client.discord.MessageAttachment('./images/pseudoone.png')
        const imgTwo= new client.discord.MessageAttachment('./images/pseudotwo.png')
        const imgThree = new client.discord.MessageAttachment('./images/pseudothree.png')

        const embedOne = new client.discord.MessageEmbed()
        .setTitle(`Etape 1️:`)
        .setDescription(`Pour pouvoir vous contacter plus facilement nous vous demandons d'avoir votre pseudonyme de joueur présent dans votre pseudonyme discord. Vous pouvez l'ajouter au début, à la fin, entre parenthèses ou entre crochets mais il doit être clair et lisible pour vous trouver dans la recherche.

        Cliquez en haut à gauche de votre discord sur le nom du discord Vigrid.')`, true)
        .setColor('RANDOM')
        .setImage(url="attachment://pseudoone.png")
        .setTimestamp()

        await interaction.channel.send({embeds: [embedOne], files: [imgOne] });

        const embedTwo = new client.discord.MessageEmbed()
        .setTitle(`Etape 2:`)
        .setDescription(`Dans la liste déroulante cliquez sur **Changer le pseudo.**`, true)
        .setColor('RANDOM')
        .setImage(url="attachment://pseudotwo.png")
        .setTimestamp()

        await interaction.channel.send({embeds: [embedTwo], files: [imgTwo]});

        const embedThree = new client.discord.MessageEmbed()
        .setTitle(`Etape 3:`)
        .setDescription(`Dans la liste déroulante cliquez sur **Changer le pseudo**.`, true)
        .setColor('RANDOM')
        .setImage(url="attachment://pseudothree.png")
        .setTimestamp()

        await interaction.channel.send({embeds: [embedThree],files: [imgThree]});


      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **pseudo.js** \n${err}`)
      }
    },
  };
  