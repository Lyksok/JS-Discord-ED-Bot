const { SlashCommandBuilder } = require("discord.js");
const { random, floor } = require("mathjs");
const { EmbedBuilder } = require("discord.js");

const randomMessages = {
  1: "Tu demandes à une machine de t'envoyer un message, c'est que tu n'as vraiment pas d'amis ...",
  2: "Arthur le penguin t'observe",
  3: "T'es magnifique ma chérie",
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("message_sympa")
    .setDescription("renvoie un message sympathique"),
  async execute(interaction) {
    function between(min, max) {
      return floor(random() * (max - min) + min);
    }
    const Embed = new EmbedBuilder()
      .setTitle("Commande validée !")
      .addFields({
        name: "Message Sympathique :",
        value: randomMessages[between(1, Object.keys(randomMessages).length)],
      })
      .setTimestamp()
      .setFooter({ text: `Message Author : FDP ca marche pas` });
    await interaction.reply({ embeds: Embed });
  },
};
