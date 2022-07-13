module.exports = {
  name: "kibble",
  aliases: ["kkbl"],
  category: "Utility",
  description: "Ou sont les ips ?",
  ownerOnly: false,
  run: async (client, interaction, args) => {
    try {

      const kibbleEmbed = new client.discord.MessageEmbed()
      .setTitle(`Recettes des Kibbles`)
      .setDescription(`Voici un tableau récapitulatif des kibbles et des ingrédients nécessaire à leur fabrication
      `, true)
      .setImage('https://media.discordapp.net/attachments/708653421799932024/996432698849624104/kibble.jpg?width=610&height=678')
      .setColor('RANDOM')
      .setTimestamp()

      return interaction.reply({ embeds: [kibbleEmbed]});
    }
    catch(err){
      return interaction.channel.send(`Une erreur a eu lieu **kibble.js** \n${err}`)
    }
  },
};
