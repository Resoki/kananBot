const { readdirSync } = require("fs");
const { Permissions } = require("discord.js");
// Example of how to make a Help SlashCommand

module.exports = {
    name: "helpmod",
    usage: '/helpmod <command>',
    options: [
        {
            name: 'command',
            description: 'Quel commande as tu besoin ?',
            type: 3,
            required: false
        }
    ],
    category: "Bot",
    description: "🔴 Retourne toutes les commandes de modération !",
    userPerms: ["SEND_MESSAGES"],
    ownerOnly: false,
    run: async (client, interaction) => {
        const permission = interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS);
        if (!permission)
        return interaction.reply(`❌ | Tu n'as pas la permission d'utiliser cette commande !`);

        const commandInt = interaction.options.getString("command");
        if (!commandInt) {

            const modCommandsList = [];
            readdirSync(`./slashCommands/Mod`).forEach((file) => {
                const filen = require(`../../slashCommands/Mod/${file}`);
                const name = `\`${filen.name}\``
                modCommandsList.push(name);
            });

            const helpEmbed = new client.discord.MessageEmbed()
            .setTitle(`📚 Aides Moderation`)
            .setDescription(`L'ensemble des commandes que vous pouvez utiliser sur le discord de la communauté Vigrid`)
            .addField("🤖 - Mod SlashCommands", modCommandsList.map((data) => `${data}`).join(", "), true)
            .setColor('RED')
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
