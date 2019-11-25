const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Add command [WIP] /help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "Help"){
        message.channel.sendMessage("Liste des Commandes :\n\n**__Toujours une majuscule !__** __Exemple: /Help__\n**Help**");
    }

    if (message.content === "cc"){
        message.channel.sendMessage("Coucou a toi !");
        console.log("Réponse a 'cc' efféctuer")
    }
});
