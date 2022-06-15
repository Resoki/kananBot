const cron = require('node-cron');
const global = require('../../config');

module.exports = {
    name: 'ready',
    /**
     * @param {Client} client 
     */
    async execute(client) {
        
        // Puts an activity
        client.user.setActivity("KiradUnlocks", {
            type: "WATCHING",
            name: "KiradUnlocks"
        });

        cron.schedule('* * * * *', async() => {
            const guild = client.guilds.cache.get(global.guild_id);
            var memberCount = guild.memberCount;

            const channel = client.channels.cache.find(channel => channel.id === '');
            await channel.setName(`Membres: ${memberCount}`)
          });
        
        // Send a message on the console
        console.log(`[LOG] ${client.user.tag} is now online!\n[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[LOG] Bot serving ${client.users.cache.size} users`);
    }
}
