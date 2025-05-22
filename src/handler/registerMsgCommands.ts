import "dotenv/config";
import { Client } from "discord.js";
import config from "../config";
import fs from "fs";
import chalk from "chalk";

import listenerMsgCommands from "./listenerMsgCommands";

const handlerRegisterMsgCommands = async (client: Client) => {

    if (!client.isReady()) {
        await new Promise((resolve) => client.once("ready", resolve));
    }
        
    const commands = new Map();
    
    for (const directory of fs.readdirSync("./src/commands")) {
    
        for (const file of fs.readdirSync("./src/commands/" + directory).filter((f) => f.endsWith(".ts"))) {

            try {
    
                const fileContents = fs.readFileSync(`./src/commands/${directory}/${file}`, "utf-8");

                const module = await import(`../commands/${directory}/${file}`);
                const command = module.default;

                const { SlashCommandBuilder } = await import('@discordjs/builders');
                if (
                    typeof command.data?.toJSON === "function" &&
                    command.data.constructor.name === "SlashCommandBuilder"
                ) {
                    console.log("regMsg: Not a Message Command");
                    continue;
                }

                commands.set(command.data.name, command);

                if ( config.guildId !== "" ) {

                    if (!client.user?.id) return;

                    await commands.set(command.data.name, command);

                } else {

                    if (!client.user?.id) return;

                    await commands.set(command.data.name, command);

                }

            } catch ( err ) {
                
                console.log(chalk.red.bold("[🌿]") + " " + chalk.red("There was an error while registering a message command."));
                console.log()
                console.log(chalk.grey("------------------------------"))
                console.log()
                console.log(err);
                console.log()
                console.log(chalk.grey("------------------------------"))

            }

        }

    }

    if (  config.guildId !== "" ) {

        listenerMsgCommands(client, commands, true);

    } else {

        listenerMsgCommands(client, commands, false);

    }

}

export default handlerRegisterMsgCommands;