import { Client, Interaction } from "discord.js"
import config from "./config.json"
import commands from "./commands.json"


const client = new Client({
  intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'],
})

client.once("ready", async () => {
  console.log("Connected to discord. And now setup...")
  if (client.application) {
    await client.application.commands.set(commands)
  }
  if (client.user) {
    console.log(`[${client.user.name}]: Setup is finish`)
  }
})

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;
  
  if (commandName === "ping") {
    await interaction.reply("Pong")
  }
})

client.login(config.token)
