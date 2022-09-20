const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, guildId, clientId } = process.env;
const fs = require("node:fs");
const path = require("node:path");
const commands = [];
const commandsPath = path.join(__dirname, "../commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(TOKEN);
console.log(commands);
(async () => {
  await rest
    .put(Routes.applicationCommands(clientId), { body: commands })
    .then((data) =>
      console.log(
        `Successfully registered ${data.length} application commands.`
      )
    )
    .catch((error) => console.log(error));
})();
