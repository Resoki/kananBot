const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        try {
            var row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel("Acheter")
                .setStyle("LINK")
                .setCustomId('click-buy')
            );

            if(interaction.customId === 'click-buy') {
                const embedBuy = new MessageEmbed()
                .setTitle('Acheter')
                .setColor('RANDOM')
                .setDescription(`Pour acheter, ouvre un ticket ici: <#971042396743802951>`)
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL({size: 512, dynamic: true}))            
                return interaction.member.send({embeds: [embedBuy]});
            }


            if(interaction.values[0] === 'select-one') {
                const embedSend = new MessageEmbed()
                .setTitle('🔓 UNLOCK-ALL / BLACK OPS 🔓')
                .setColor('RANDOM')
                .setDescription(`*Déverrouille TOUS les items\n*A vie (accès illimité)\n*Comptes illimités (sans lien avec 1 compte)\n*Non détecté (utilise un drivers en ligne, aucun fichier sur votre ordinateur)\n*Mise à jour presque instantanée après les mises à jour du jeux\n*Super facile à utiliser (1 seul bouton pour l'activer`)
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL({size: 512, dynamic: true}))
                .setImage('https://static.actugaming.net/media/2016/05/call-of-duty-black-ops.jpg')                
                return interaction.member.send({embeds: [embedSend], components: [row]});
            }

            if(interaction.values[0] === 'select-two') {
                const embedSend = new MessageEmbed()
                .setTitle('🔓 UNLOCK-ALL / VANGUARD🔓 ')
                .setColor('RANDOM')
                .setThumbnail(client.user.displayAvatarURL({size: 512, dynamic: true}))
                .setDescription(`*Déverrouille TOUS les items\n*A vie (accès illimité)\n*Comptes illimités (sans lien avec 1 compte)\n*Non détecté (utilise un drivers en ligne, aucun fichier sur votre ordinateur)\n*Mise à jour presque instantanée après les mises à jour du jeux\n*Super facile à utiliser (1 seul bouton pour l'activer`)
                .setTimestamp()
                .setImage('https://bnetcmsus-a.akamaihd.net/cms/blog_header/G0EEDKCN5EG21633976665304.jpg')                
                return interaction.member.send({embeds: [embedSend], components: [row]});
            }

            if(interaction.values[0] === 'select-three') {
                const embedSend = new MessageEmbed()
                .setTitle('🔓 UNLOCK-ALL / MODERNE WARFARE 🔓')
                .setColor('RANDOM')
                .setDescription(`*Déverrouille TOUS les items\n*A vie (accès illimité)\n*Comptes illimités (sans lien avec 1 compte)\n*Non détecté (utilise un drivers en ligne, aucun fichier sur votre ordinateur)\n*Mise à jour presque instantanée après les mises à jour du jeux\n*Super facile à utiliser (1 seul bouton pour l'activer`)
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL({size: 512, dynamic: true}))
                .setImage('https://static.actugaming.net/media/2019/10/call-of-duty-modern-warfare-2.jpg')                
                return interaction.member.send({embeds: [embedSend], components: [row]});
            }
            if(interaction.values[0] === 'select-four') {
                const embedSend = new MessageEmbed()
                .setTitle('🔓 UNLOCK-ALL / WARZONE (VANGUARD,BLACK OPS,MODERNE WARFARE) 🔓')
                .setColor('RANDOM')
                .setDescription(`*Déverrouille TOUS les items\n*A vie (accès illimité)\n*Comptes illimités (sans lien avec 1 compte)\n*Non détecté (utilise un drivers en ligne, aucun fichier sur votre ordinateur)\n*Mise à jour presque instantanée après les mises à jour du jeux\n*Super facile à utiliser (1 seul bouton pour l'activer`)
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL({size: 512, dynamic: true}))
                .setImage('https://1734811051.rsc.cdn77.org/data/images/full/380530/new-mysterious-lightning-storm-on-cod-warzone-verdansk-does-this-hints-a-new-content.png')                
                return interaction.member.send({embeds: [embedSend], components: [row]});
            }
        }
        catch(err) {
            return interaction.reply(`Error:\n${err}`)
        }

    }
}
