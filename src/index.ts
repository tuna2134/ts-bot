import { Client } from "discord.js"


client = new Client({
  intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES']
})

client.once("ready", () => {
  console.log("Ready")
})

client.login()
