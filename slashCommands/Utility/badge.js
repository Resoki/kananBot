
module.exports = {
  name: "badge",
  aliases: ["badge", "latency"],
  category: "Utility",
  description: "Show badge of member !",
  ownerOnly: false,
  options: [
    {
        name: "user",
        description: "Le nom de l'user pour voir ses badges",
        type: "USER",
        required: false
    }
],
  run: async (client, interaction, args) => {
    try {
      const user = interaction.options.getUser("user") || interaction.member.user
      const badges = user.flags.toArray();

        const badgesEmbed = new client.discord.MessageEmbed()
        .setTitle(`${user.username}`)
        .addField("Tes badges:", `${badges.length === 0 ? 'Pas de badge trouvé' : badges}`, true)
        .setColor('RANDOM')
        .setThumbnail(user.displayAvatarURL({size: 512, dynamic: true}))
        .setFooter({ text: `Show badge`, iconURL: `${user.displayAvatarURL()}` });

      await interaction.reply({ embeds: [badgesEmbed]});
    }
    catch(err){
      return interaction.channel.send(`Une erreur a eu lieu \n${err}`)
    }
  },
};
