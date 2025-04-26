// @src/index.ts -> Main entry point -----------------------------------------------
//
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Made by @NZ-Linix on GitHub
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//
// ---------------------------------------------------------------------------------

// Imports -------------------------------------------------------------------------

import "dotenv/config";
import { 
    Client,
    GatewayIntentBits,
    Collection,
    Partials,
    Events,
    ActivityType 
} from "discord.js";

// Load console colors -------------------------------------------------------------

import chalk from "chalk";
import config from "./config";

// Create client -------------------------------------------------------------------

const client = new Client({ 
    intents: 53608447,
    partials: [
        Partials.User,
        Partials.ThreadMember,
        Partials.SoundboardSound,
        Partials.Reaction,
        Partials.Message,
        Partials.GuildScheduledEvent,
        Partials.GuildMember,
        Partials.Channel,
    ]
})

const events         = new Map(); // Events will be stored here
const slashCommands  = new Map(); // Slash commands will be stored here
const msgCommands    = new Map(); // Message commands will be stored here

console.log() // Empty line for better readability

// Ready event ---------------------------------------------------------------------

client.once(Events.ClientReady, async () => {

    setTimeout(() => {
        console.log(chalk.green.bold("[🌿]") + " " + "Application is ready.");
    }, 10);

});

// Status rotations ----------------------------------------------------------------

if ( config.status.rotations.length > 0 ) {

    let i = 0;

    setInterval(() => {

        if ( i >= config.status.rotations.length ) {
            i = 0;
        }

        client.user?.setPresence({ activities: [{ name: config.status.rotations[i], type: ActivityType.Custom }], status: "online" });

        i++;

    }, 5 * 1000);

}

// Login to Discord ----------------------------------------------------------------

client.login(process.env.CLIENT_TOKEN).then(() => {

    console.log(chalk.green.bold("[🌿]") + " " + "Logged in as " + chalk.green.bold(client.user?.username) + ".");

}).catch((err) => {

    console.log(chalk.red.bold("[🌿]") + " " + chalk.red("Failed to login: ") + err);

});