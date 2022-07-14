module.exports = {
    name: "favoris",
    aliases: ["fvrs"],
    category: "Utility",
    description: "⭐ Comment ajouter un serveur en favoris ?",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {
        const imgOne = new client.discord.MessageAttachment('./images/favorisone.png')
        const imgTwo= new client.discord.MessageAttachment('./images/favoristwo.png')
        const imgThree = new client.discord.MessageAttachment('./images/favoristhree.png')

        const embedOne = new client.discord.MessageEmbed()
        .setTitle(`Etape 1:`)
        .setDescription(`Cliquer sur l'onglet **Afficher** puis **Serveurs**'`, true)
        .setImage(url="attachment://favorisone.png")
        .setColor('RANDOM')
        .setTimestamp()

        await interaction.channel.send({embeds: [embedOne], files: [imgOne], ephemeral: true});

        const embedTwo = new client.discord.MessageEmbed()
        .setTitle(`Etape 2:`)
        .setDescription(`Une nouvelle fenêtre va apparaître. Cliquer sur l'onglet **Favoris** puis **Ajouter un serveur**.`, true)
        .setColor('RANDOM')
        .setImage(url="attachment://favoristwo.png")
        .setTimestamp()

        await interaction.channel.send({embeds: [embedTwo], files: [imgTwo], ephemeral: true});

        const embedThree = new client.discord.MessageEmbed()
        .setTitle(`Etape 3:`)
        .setDescription(`Un nouvel onglet va s'ouvrir. Rentrer l'adresse IP trouvé sur Discord. Cliquer ensuite sur le bouton **Chercher à cette adresse** et ajouter la carte.`, true)
        .setColor('RANDOM')
        .setImage(url="attachment://favoristhree.png")
        .setTimestamp()

        await interaction.channel.send({embeds: [embedThree], files: [imgThree], ephemeral: true});

      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **favoris.js** \n${err}`)
      }
    },
  };
  