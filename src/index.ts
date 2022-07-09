import { Client, Interaction } from "discord.js"
import config from "./config.json"
import commands from "./commands.json"


const client = new Client({
    intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'],
})

client.once("ready", async () => {
    console.log("Connected to discord. And now setup...")
    await client.application?.commands.set(commands)
    console.log(`[${client.user?.username}]: Setup is finish`)
})

client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
  
    if (commandName === "ping") {
        await interaction.reply("Pong")
    } else if (commandName === "status") {
        await interaction.deferReply();
        await interaction.editReply({
            embeds: [
                {
                    title: "TS Bot - status",
                    fields: [
                        {
                            name: "WS Latency",
                            value: `${client.ws.ping}ms`,
                        },
                        {
                            name: "Cpu useage",
                            value: `${process.cpuUsage().user}%`,
                        },
                        {
                            name: 'Server count',
                            value: `${client.guilds.cache.size} server's`
                        }
                    ]
                }
            ]
        })
    }
})

client.login(config.token).then(() => {
    console.log("Logining...")
})
