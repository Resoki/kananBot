const { readdirSync } = require("fs");

// Example of how to make a Help SlashCommand

module.exports = {
    name: "help",
    usage: '/help <command>',
    options: [
        {
            name: 'command',
            description: 'Quel commande as tu besoin ?',
            type: 3,
            required: false
        }
    ],
    category: "Bot",
    description: "Retourne toutes les commandes !",
    userPerms: ["SEND_MESSAGES"],
    ownerOnly: false,
    run: async (client, interaction) => {
        const commandInt = interaction.options.getString("command");
        if (!commandInt) {

            const botCommandsList = [];
            readdirSync(`./slashCommands/Bot`).forEach((file) => {
                const filen = require(`../../slashCommands/Bot/${file}`);
                const name = `\`${filen.name}\``
                botCommandsList.push(name);
            });

            const utilityCommandsList = [];
            readdirSync(`./slashCommands/Utility`).forEach((file) => {
                const filen = require(`../../slashCommands/Utility/${file}`);
                const name = `\`${filen.name}\``
                utilityCommandsList.push(name);
            });

            const ticketsCommandsList = [];
            readdirSync(`./slashCommands/Tickets`).forEach((file) => {
                const filen = require(`../../slashCommands/Tickets/${file}`);
                const name = `\`${filen.name}\``
                ticketsCommandsList.push(name);
            });

            const helpEmbed = new client.discord.MessageEmbed()
            .setTitle(`📚 Aides`)
            .setDescription(`L'ensemble des commandes que vous pouvez utiliser sur le discord de la communauté Vigrid`)
            .addField("🤖 - Bot SlashCommands", botCommandsList.map((data) => `${data}`).join(", "), true)
            .addField("🛠 - Utility SlashCommands", utilityCommandsList.map((data) => `${data}`).join(", "), true)
            .addField("📩 - Tickets SlashCommands", ticketsCommandsList.map((data) => `${data}`).join(", "), true)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

            interaction.reply({ embeds: [helpEmbed]});
        } else {
            const command = client.slash.get(commandInt.toLowerCase());

            if (!command) {
                interaction.reply({ content: `Il n'y a pas de SlashCommands nommé: "${commandInt}"` });
            } else {

                let command = client.slash.get(commandInt.toLowerCase());
                let name = command.name;
                let description = command.description || "Pas de description précisé !"
                let usage = command.usage || "Pas d'usage precisé !"
                let category = command.category || "Pas de catégorie precisé !"

                let helpCmdEmbed = new client.discord.MessageEmbed()
                .setTitle(`${client.user.username} Help | \`${(name.toLocaleString())}\` SlashCommand`)
                .addFields(
                    { name: "Description", value: `${description}` },
                    { name: "Usage", value: `${usage}` },
                    { name: 'Category', value: `${category}` }
                )
                .setColor(client.config.embedColor)
                .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

                interaction.reply({ embeds: [helpCmdEmbed] });
            }
        }
    },
};
