const { SlashCommandBuilder } = require("discord.js");
const { Session } = require("ecoledirecte.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("get_homework")
    .setDescription("Récupère tes fucking devoirs")
    .addIntegerOption((option) =>
      option
        .setName("jour")
        .setDescription("Les devoirs du jour spécifié")
        .setRequired(true)
        .addChoices(
          { name: "1", value: 1 },
          { name: "2", value: 2 },
          { name: "3", value: 3 }
        )
    )
    .addIntegerOption((option) =>
      option
        .setName("mois")
        .setDescription("Spécifie le mois")
        .setRequired(true)
        .addChoices({ name: "janvier", value: 1 })
    ),
  async execute(interaction) {
    const jour = interaction.option.getInteger("jour");
    const mois = interaction.option.getInteger("mois");
    await interaction.reply(jour);
    await interaction.deferReply(mois);
  },
};
