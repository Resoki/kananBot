const cron = require('node-cron');
const global = require('../../config');
const chalk = require("chalk");
module.exports = {
    name: 'ready',
    /**
     * @param {Client} client 
     */
    async execute(client) {
        // Puts an activity
        client.user.setActivity("KananBot", {
            type: "WATCHING",
            name: "KananBot"
        });

        await cron.schedule('0 6 * * *', () => { 
            const channelGeneral = client.channels.cache.find((ch) => ch.id === global.channelGeneral);

            const voteEmbed = new client.discord.MessageEmbed()
            .setTitle(`🏅 Les top-serveurs, qu'est ce que c'est ?`)
            .setDescription(`Votez ! Votez ! À vot' bon cœur messieurs dames ! 
            Plus un serveur est correctement positionné sur un top-serveurs, 
            plus il est visible par les autres joueurs visitant l’annuaire. Et plus on est visible, 
            plus on voit régulièrement de nouvelles têtes sur le serveur.
             Plus d'informations à cette [addresse](https://vigrid-ark.fr/)\n
             ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ\n
             :white_small_square: ark-servers.net
            - Vote possible toute les 24 heures
            - 200 points par votes (individuels)
            - à récuperer directement en jeu après chaque vote avec la commande /claim\n
            ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ\n
            :white_small_square: arkse.top-serveurs.net
            - Vote possible toute les 2 heures
            - 750 points pour 100 votes (communs)\n
            :white_small_square: serveur-prive.net
            - Vote possible toute les 1 heure 30 minutes
            - Ici on vote pour la gloire, le site ne proposant pas un suivi suffisant.\n
            ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ`, true)
            .setFooter('La distribution se fait au début du mois suivant, le délais peut varier selon la disponibilité du staff, merci de votre compréhension.')
            .setColor('RANDOM')
            .setTimestamp()
    
            return channelGeneral.reply({ embeds: [voteEmbed], ephemeral: true});
          });

          await cron.schedule('40 18 * * *', () => { 
            const channelGeneral = client.channels.cache.find((ch) => ch.id === global.channelGeneral);

            const voteEmbed = new client.discord.MessageEmbed()
            .setTitle(`🏅 Les top-serveurs, qu'est ce que c'est ?`)
            .setDescription(`Votez ! Votez ! À vot' bon cœur messieurs dames ! 
            Plus un serveur est correctement positionné sur un top-serveurs, 
            plus il est visible par les autres joueurs visitant l’annuaire. Et plus on est visible, 
            plus on voit régulièrement de nouvelles têtes sur le serveur.
             Plus d'informations à cette [addresse](https://vigrid-ark.fr/)\n
             ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ\n
             :white_small_square: ark-servers.net
            - Vote possible toute les 24 heures
            - 200 points par votes (individuels)
            - à récuperer directement en jeu après chaque vote avec la commande /claim\n
            ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ\n
            :white_small_square: arkse.top-serveurs.net
            - Vote possible toute les 2 heures
            - 750 points pour 100 votes (communs)\n
            :white_small_square: serveur-prive.net
            - Vote possible toute les 1 heure 30 minutes
            - Ici on vote pour la gloire, le site ne proposant pas un suivi suffisant.\n
            ᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔᚔ`, true)
            .setFooter('La distribution se fait au début du mois suivant, le délais peut varier selon la disponibilité du staff, merci de votre compréhension.')
            .setColor('RANDOM')
            .setTimestamp()
    
            return channelGeneral.reply({ embeds: [voteEmbed], ephemeral: true});
          });



        // Send a message on the console console.log(chalk.bgGreen.black
        console.log(chalk.bgGreen.black(`[LOG] ${client.user.tag} is now online!\n[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[LOG] Bot serving ${client.users.cache.size} users`));
    }
}
