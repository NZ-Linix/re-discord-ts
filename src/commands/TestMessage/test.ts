//_MESSAGE_COMMAND
// The line above is for the handler. DO NOT REMOVE IT. You can delete this line.

import { Message, Client } from "discord.js";

export default {

    data: {
        name: "test",
        description: "Test command",
        customPrefix: "",
    },

    async execute( message: Message, client: Client, args: string[] ) {

        await message.reply({ content: "Test command executed!" });

    }

}