const { Permissions } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "giveaways",
    aliases: ["badge", "latency"],
    category: "Utility",
    description: "Show badge of member !",
    ownerOnly: false,
    options: [
      {
          name: "duration",
          description: "Indiquer la durée",
          type: "STRING",
          required: true
      },
      {
        name: "nb_winner",
        description: "Indiquer le nombre de winner",
        type: "NUMBER",
        required: true
    },
    {
        name: "prize",
        description: "Indiquer le prix à gagner",
        type: "STRING",
        required: true
    }
  ],
    run: async (client, interaction, args) => {
      try {
        const permission = interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS);
        if(!permission) return interaction.reply(`Tu n'as pas la permission de lancer un giveaway !`);
        const duration = interaction.options.getString('duration');
        const winnerCount = interaction.options.getNumber('nb_winner');
        const prize = interaction.options.getString('prize');
  
        client.giveawaysManager.start(interaction.channel, {
            duration: ms(duration),
            winnerCount,
            prize
        }).then((gData) => {
            console.log(gData); // {...} (messageId, end date and more)
        });
  
        await interaction.reply('Un giveaways commencé !');
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu \n${err}`)
      }
    },
  };
  