import "dotenv/config";
import { REST } from "@discordjs/rest";
import { Client, Routes } from "discord.js";
import config from "../config";
import fs from "fs";
import chalk from "chalk";

import listenerSlashCommands from "./listenerSlashCommands";

// REST ----------------------------------------------------------------------------

const restApi = new REST({ version: "10" }).setToken(process.env.CLIENT_TOKEN as string);

// Register slash commands ---------------------------------------------------------

const handlerRegisterSlashCommands = async (client: Client) => {

    if (!client.isReady()) {
        await new Promise((resolve) => client.once("ready", resolve));
    }

    const commands = new Map();

    for (const directory of fs.readdirSync("./src/commands")) {

        for (const file of fs.readdirSync("./src/commands/" + directory).filter((f) => f.endsWith(".ts"))) {

            try {

                const fileContents = fs.readFileSync(`./src/commands/${directory}/${file}`, "utf-8");

                if (!fileContents.startsWith("//_SLASH_COMMAND")) {continue;}

                const module = await import(`../commands/${directory}/${file}`);
                const command = module.default;

                commands.set(command.data.name, command);

                if ( config.guildId !== "" ) {

                    if (!client.user?.id) return;

                    await restApi.put(
                        Routes.applicationGuildCommands(client.user?.id, config.guildId),
                        { body: [command.data] }
                    );

                } else {

                    if (!client.user?.id) return;

                    await restApi.put(
                        Routes.applicationCommands(client.user?.id),
                        { body: [command.data] }
                    );

                }

            } catch ( err ) {

                console.log(chalk.red.bold("[🌿]") + " " + chalk.red("There was an error while registering a slash command."));
                console.log()
                console.log(chalk.grey("------------------------------"))
                console.log()
                console.log(err);
                console.log()
                console.log(chalk.grey("------------------------------"))
 
            }

        }

    }

    listenerSlashCommands(client, commands);

}

export default handlerRegisterSlashCommands;