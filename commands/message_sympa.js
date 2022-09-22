const { SlashCommandBuilder } = require("discord.js");
const { random, floor } = require("mathjs");
const { EmbedBuilder } = require("discord.js");

const randomMessages = [
  "Tu demandes à une machine de t'envoyer un message, c'est que tu n'as vraiment pas d'amis ...",
  "Arthur le penguin t'observe",
  "T'es magnifique ma chérie",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("message_sympa")
    .setDescription("renvoie un message sympathique"),
  async execute(interaction) {
    const Embed = new EmbedBuilder()
      .addFields({
        name: "Message",
        value:
          randomMessages[Math.floor(Math.random() * randomMessages.length)],
      })
      .setTimestamp()
      .setFooter({ text: `Author : ${interaction.user.username}` });
    await interaction.reply({ embeds: [Embed] });
  },
};
