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
            try {
            const guild = client.guilds.cache.get(global.guildID);
            var memberCount = guild.memberCount;

            const members = await guild.roles.cache.get(global.roleClient).members.map(m=>m.user.id);
            const count = members.length;

            const channel = client.channels.cache.find(channel => channel.id === '983334338022219797');
            await channel.setName(`《🥳》Clients: ${count}`)
            }
            catch(err){
                return console.log(err)
            }
          });
        
        // Send a message on the console
        console.log(`[LOG] ${client.user.tag} is now online!\n[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[LOG] Bot serving ${client.users.cache.size} users`);
    }
}
