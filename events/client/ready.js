const cron = require('node-cron');
const global = require('../../config');
const { Collection } = require("discord.js");

module.exports = {
    name: 'ready',
    /**
     * @param {Client} client 
     */
    async execute(client) {
        // Puts an activity
        client.user.setActivity("SpacyUnlocks", {
            type: "WATCHING",
            name: "SpacyUnlocks"
        });
        // Send a message on the console
        console.log(`[LOG] ${client.user.tag} is now online!\n[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[LOG] Bot serving ${client.users.cache.size} users`);
    }
}
