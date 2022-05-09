module.exports = {
    name: "remove",
    options: [
        {
            name: "user",
            description: "Ecrit l'user que tu veux retirer du ticket !",
            type: "USER",
            required: true
        }
    ],
    category: "Tickets",
    description: "Retirer un membre du ticket",
    userPerms: ["SEND_MESSAGES"],
    ownerOnly: false,
    run: async (client, interaction, args) => {
        let user = interaction.options.getUser("user");

        if(interaction.channel.name.includes("close") || interaction.channel.name.includes("ticket")) {
            interaction.channel.permissionOverwrites.edit(user.id, {
                ATTACH_FILES: false,
                READ_MESSAGE_HISTORY: false,
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
            });

            interaction.reply({ content: `${user} a été retiré du ticket par ${interaction.user}` });
        } else {
            interaction.reply({ content: "Cette commande ne peux être utilisé que dans un ticket", ephemeral: true });
        }
    }
}