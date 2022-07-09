import { Client } from "discord.js"
import config from "./config.json"
import commands from "./commands.json"


const client = new Client({
  intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'],
})

client.once("ready", async () => {
  console.log("Ready")
  if (client.application) {
    await client.application.commands.set(commands)
  }
})

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;
  
  if (commandName === "ping") {
    await interaction.reply("Pong")
  }
})

client.login(config.token)
