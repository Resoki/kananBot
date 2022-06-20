const { Client, Collection, Intents } = require('discord.js');
const handler = require("./handler/index");
const { GiveawaysManager } = require('discord-giveaways');
const {channelInvite, token} = require('./config');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
});

const Discord = require('discord.js');

// Call .env file to get Token
require('dotenv').config()

module.exports = client;

// Global Variables
client.discord = Discord;
client.commands = new Collection();
client.slash = new Collection();
client.config = require('./config')

// Records commands and events
handler.loadEvents(client);
handler.loadCommands(client);
handler.loadSlashCommands(client);

// Error Handling

const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});

client.giveawaysManager = manager;

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});

const InvitesTracker = require('@androz2091/discord-invites-tracker');
const tracker = InvitesTracker.init(client, {
    fetchGuilds: true,
    fetchVanity: true,
    fetchAuditLogs: true
});


tracker.on('guildMemberAdd', async(member, type, invite) => {

  const welcomeChannel = member.guild.channels.cache.find((ch) => ch.id === channelInvite);

  const baseEmbed = async(description) => {
    const embedInvite = new Discord.MessageEmbed()
    .setTitle('Invite Tracker')
    .setDescription(description)
    .setColor('BLUE');

    return welcomeChannel.send({embeds: [embedInvite]});
  }

  if(type === 'normal'){
    await baseEmbed(`Bienvenue ${member} ! Tu as été invité par ${invite.inviter.username}!`);
  }

  else if(type === 'vanity'){
    await baseEmbed(`Bienvenue ${member}! Tu as rejoin en utilisant une invitation custom !`);
  }

  else if(type === 'permissions'){
    await baseEmbed(`Bienvenue ${member}! Je ne peux pas te dire par quel moyen tu as rejoins le serveur car je n'ai pas la permission 'MANAGE Server'!`);
  }

  else if(type === 'unknown'){
    await baseEmbed(`Bienvenue ${member}! Je ne peux pas te dire par quel moyen tu as rejoins le serveur !`);
  }

});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[FATAL] Possibly Unhandled Rejection at: Promise ", promise, " reason: ", reason.message);
});

// Login Discord Bot Token
client.login(process.env.DJS_TOKEN || token);