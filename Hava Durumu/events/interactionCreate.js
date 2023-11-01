const { Collection, EmbedBuilder } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = async (client, interaction) => {

// Metehan Studio Tarafından Yapılmıştır - discord.gg/medya

  if (interaction.isChatInputCommand()) {

    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

// Metehan Studio Tarafından Yapılmıştır - discord.gg/medya

      if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction);
      }
    });
  }
};
