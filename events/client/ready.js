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
        let invites = new Collection();

        const guild = client.guilds.cache.get(global.guildID);
        guild.invites.fetch()
        .then((guildInvites)=> {
          invites.set(guild.id, new Map(guildInvites.map((invite) => [invite.code, invite.uses])));
        })
      

        cron.schedule('* * * * *', async() => {
            try {
            const guild = client.guilds.cache.get(global.guildID);

            const membersRolePc = await guild.roles.cache.get(global.roleClientPC).members.map(m=>m.user.id);
            const membersRoleConsole = await guild.roles.cache.get(global.roleClientConsole).members.map(m=>m.user.id);
            const count = membersRolePc.length + membersRoleConsole.length;

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
