const botSettings = require("./bot-settings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`Bot is ready! ${bot.user.username}`);

    // perms and promise
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch (e) {
        console.log(e.stack);
    }

    bot.user.setActivity('Secret Story of the Swan', { type: 'LISTENING' }).catch(console.error);
});

bot.on("message", async message => {
    /** Pokecord Notifs **/
    // if(message.author.id === '716390085896962058') {
    //     //console.log(message.content);
    //     if(message.embeds.length > 0) {
    //         console.log(message.embeds[0]);
    //         for(var i = 0; i < message.embeds.length; i++) {
    //             if(message.embeds[i].title.includes("A wild pokémon has appeared")) {
    //                 bot.fetchUser('204664946347343873').then((user) => {
    //                     user.send("Hello! There's a new wild pokémon in the chat!\n" + message.embeds[0].image.url);
    //                 });
    //             }
    //         }
    //     }
    // }
    //https://thumbs.gfycat.com/DecentMeatyAtlanticspadefish-size_restricted.gif
    if(message.content === 'Good morning') {
        message.channel.send('Good morning WIZ*ONE! \nhttps://thumbs.gfycat.com/DecentMeatyAtlanticspadefish-size_restricted.gif');
    }

    if(message.content === 'hello chaewon') {
        message.channel.send('Hello!');
    }
});
bot.login(process.env.token);

// console.log(botSettings.token);
// console.log(botSettings.prefix);