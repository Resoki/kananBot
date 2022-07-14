module.exports = {
    name: "ip",
    aliases: ["ips"],
    category: "Utility",
    description: "Ou sont les ips ?",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {

        const ipEmbed = new client.discord.MessageEmbed()
        .setTitle(`Où sont les IP ?`)
        .setDescription(`Bonjour **Zerem** et bienvenue sur le serveur. Si vous désirez commencer le voyage sur notre serveur l'aventure commence par la lecture du **#règlement**. Ainsi, une fois les règles de communauté acceptées vous pourrez nous rejoindre après un bref passage par les **#informations**.
        Bonne lecture et bonne route`, true)
        .setColor('RANDOM')
        .setTimestamp()

        return interaction.reply({ embeds: [ipEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **ip.js** \n${err}`)
      }
    },
  };
  