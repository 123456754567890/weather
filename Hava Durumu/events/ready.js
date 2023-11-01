const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { TOKEN } = require("../config.json");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
// Metehan Studio Tarafından Yapılmıştır - discord.gg/medya
const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users"]
  },
  partials: PARTIALS,
  retryLimit: 3
});

module.exports = async (client) => {
// Metehan Studio Tarafından Yapılmıştır - discord.gg/medya
  const rest = new REST({ version: "10" }).setToken(TOKEN);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (error) {
    console.error(error);
  }
// Metehan Studio Tarafından Yapılmıştır - discord.gg/medya
  console.log(`[START] ${client.user.tag} Aktif!`);
  setInterval(async () => {

    const activities = ["Metehan Studio Test Bot", "Metehan Studio Test Bot"]
    const random = activities[
      Math.floor(Math.random() * activities.length)];
    client.user.setActivity(`${random}`)
  }, 16000);
};
