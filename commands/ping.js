const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong"),
  async execute(interaction) {
    const Embed = new EmbedBuilder()
      .addFields({
        name: "Message",
        value: "Pong !",
      })
      .setTimestamp()
      .setFooter({ text: `Author: ${interaction.user.username}` });
    await interaction.reply({ embeds: [Embed] });
  },
};
