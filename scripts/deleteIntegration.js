const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const { clientId, guildId, TOKEN } = process.env;

const rest = new REST({ version: "10" }).setToken(TOKEN);

// for guild-based commands
rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
  .then(() => console.log("Successfully deleted all guild commands."))
  .catch(console.error);
// for global commands
rest
  .put(Routes.applicationCommands(clientId), { body: [] })
  .then(() => console.log("Successfully deleted all application commands."))
  .catch(console.error);
