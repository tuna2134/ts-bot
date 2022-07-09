import { Client } from "discord.js"


const client = new Client({
  intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'],
})

client.once("ready", () => {
  console.log("Ready")
})

client.login()
