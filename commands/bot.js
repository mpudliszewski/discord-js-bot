const Discord = require('discord.js');
const moment = require('moment-timezone');

module.exports = {
    name: 'bot',
    description: "Komendy dot. bota",
    // args: true,
    execute: async (client, message, args, cooldowns) => {

        //EMPTY ARGS
        if(!args.length)
        {
            return message.channel.send("😐");
        }

        //SERVER PING, API PING AND UPTIME
        else if(args[0] == 'ping')
        {
            return message.channel.send(`📶 Pinging...`).then((msg) => {
                const _ = new Discord.MessageEmbed()
                .setTitle("🏓 Pong!")
                .setDescription("Server: `" + (msg.createdAt - message.createdAt) + "ms`\nAPI: `" + Math.round(client.ws.ping) + "ms`\nUptime: `" + msToTime(client.uptime) + "`")
                .setColor("#2f3136");
    
                msg.edit(_);
                msg.edit("\u200B");
            });
        }

        //SNOWFLAKE DECONSTRUCT
        else if(args[0] == 'snowflake')
        {
            const snowflake = Discord.SnowflakeUtil.deconstruct(args[1]);
            const embed = new Discord.MessageEmbed()
            .setColor("#80ffff")
            .setTitle(`❄ ${args[1]} ❄`)
            .addField("DATE", moment(snowflake.date).tz("Europe/Warsaw").format("YYYY-MM-DD HH:mm:ss.SSS"), true)
            .addField("TIMESTAMP", snowflake.timestamp, true)
            .addField("BINARY", snowflake.binary, true)
            .addField("WORKER ID", snowflake.workerID, true)
            .addField("PROCESS ID", snowflake.processID, true)
            .addField("INCREMENT", snowflake.increment, true);

            return message.channel.send(embed);
        }
    }
}

function msToTime(ms){
    days = Math.floor(ms / 86400000); // 24*60*60*1000
    daysms = ms % 86400000; // 24*60*60*1000
    hours = Math.floor(daysms / 3600000); // 60*60*1000
    hoursms = ms % 3600000; // 60*60*1000
    minutes = Math.floor(hoursms / 60000); // 60*1000
    minutesms = ms % 60000; // 60*1000
    sec = Math.floor(minutesms / 1000);

    let str = "";
    if (days) str = str + days + "d ";
    if (hours) str = str + hours + "h ";
    if (minutes) str = str + minutes + "m ";
    if (sec) str = str + sec + "s";

    return str;
}