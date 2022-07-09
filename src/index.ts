import { Client } from "discord.js"
import config from "./config.json"
import commands from "./commands.json"


const client = new Client({
  intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'],
})

client.once("ready", async () => {
  console.log("Ready")
  await client.application.commands.set(commands)
})

client.login(config.token)
