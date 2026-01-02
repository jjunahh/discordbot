// index.js
const { Client, GatewayIntentBits } = require("discord.js");

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// When the bot is ready
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Respond to messages
client.on("messageCreate", (message) => {
  // Ignore messages from other bots
  if (message.author.bot) return;

  // Simple ping command
  if (message.content === "!ping") {
    message.reply("pong");
  }

  // Optional: simple coin flip game
  if (message.content === "!flip") {
    const result = Math.random() < 0.5 ? "heads" : "tails";
    message.reply(result);
  }
});

// Log in with token stored as an environment variable
client.login(process.env.TOKEN);
