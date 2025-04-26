//_SLASH_COMMAND
// The line above is for the handler. DO NOT REMOVE IT. You can delete this line.

import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";
import db from "../../handler/database";

export default {

    data: new SlashCommandBuilder()
    .setName("counter")
    .setDescription("Add one to your counter"),

    async execute( interaction: ChatInputCommandInteraction, client: Client ) {

        if (!db.main.has(interaction.user.id + "-counter")) {
            db.main.set(interaction.user.id + "-counter", 0);
        }

        let counter = await db.main.get(interaction.user.id + "-counter") || 0;

        await db.main.set(interaction.user.id + "-counter", counter + 1);

        await interaction.reply({ content: `Your counter is now at ${counter + 1}` });

    }

}