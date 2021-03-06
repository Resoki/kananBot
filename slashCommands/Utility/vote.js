module.exports = {
    name: "vote",
    aliases: ["ips"],
    category: "Utility",
    description: "π Les top-serveurs, qu'est ce que c'est ?",
    ownerOnly: false,
    run: async (client, interaction, args) => {
      try {
        const voteEmbed = new client.discord.MessageEmbed()
        .setTitle(`π Les top-serveurs, qu'est ce que c'est ?`)
        .setDescription(`Votez ! Votez ! Γ vot' bon cΕur messieurs dames ! 
        Plus un serveur est correctement positionnΓ© sur un top-serveurs, 
        plus il est visible par les autres joueurs visitant lβannuaire. Et plus on est visible, 
        plus on voit rΓ©guliΓ¨rement de nouvelles tΓͺtes sur le serveur.
         Plus d'informations Γ  cette [addresse](https://vigrid-ark.fr/)\n
         αααααααααααααααααααααααααααααααα\n
         :white_small_square: ark-servers.net
        - Vote possible toute les 24 heures
        - 200 points par votes (individuels)
        - Γ  rΓ©cuperer directement en jeu aprΓ¨s chaque vote avec la commande /claim\n
        αααααααααααααααααααααααααααααααα\n
        :white_small_square: arkse.top-serveurs.net
        - Vote possible toute les 2 heures
        - 750 points pour 100 votes (communs)\n
        :white_small_square: serveur-prive.net
        - Vote possible toute les 1 heure 30 minutes
        - Ici on vote pour la gloire, le site ne proposant pas un suivi suffisant.\n
        αααααααααααααααααααααααααααααααα`, true)
        .setFooter('La distribution se fait au dΓ©but du mois suivant, le dΓ©lais peut varier selon la disponibilitΓ© du staff, merci de votre comprΓ©hension.')
        .setColor('RANDOM')
        .setTimestamp()

        return interaction.reply({ embeds: [voteEmbed], ephemeral: true});
      }
      catch(err){
        return interaction.channel.send(`Une erreur a eu lieu **vote.js** \n${err}`)
      }
    },
  };
  