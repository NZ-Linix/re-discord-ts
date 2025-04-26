//_SLASH_COMMAND
// The line above is for the handler. DO NOT REMOVE IT. You can delete this line.

import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";

export default {

    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command"),

    async execute( interaction: ChatInputCommandInteraction, client: Client ) {

        await interaction.reply({ content: "Test command executed!" });

    }

}