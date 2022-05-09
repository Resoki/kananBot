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
        
        // Send a message on the console
        console.log(`[LOG] ${client.user.tag} is now online!\n[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[LOG] Bot serving ${client.users.cache.size} users`);
    }
}
