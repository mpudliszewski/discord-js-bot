module.exports = {
    name: "afk",
    aliases: ["jj", "zw"],
    description: "Po prostu `-jj` i `-zw`",
    cooldown: 1,
    execute(client, message, args) {
        var commandName = message.content.slice(process.env.PREFIX.length).split(/ +/);
        commandName = commandName.shift().toLowerCase();
        if(commandName == 'afk'){
            return message.reply("nie tak używa się tej komendy");
        }
        else if(commandName == 'jj'){
            message.channel.send("```fix\n [ *** Gracz "+message.member.displayName+" już jest. ]\n```");
        }
        else if(commandName == 'zw'){
            message.channel.send("```css\n [ *** Gracz "+message.member.displayName+" zaraz wraca. ]\n```");
        }
    }
}