 const Discord = require("discord.js")
 const os = require('os')
 const cpuStat = require("cpu-stat");
 const moment = require("moment") 


 module.exports.run = async (bot, message, args) => {

            let { version } = require("discord.js");
     
            cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
             

             let bicon = bot.user.displayAvatarURL;
                  let uptime = ``;
    let totalSecs = (bot.uptime / 1000);
    let hours = Math.floor(totalSecs / 3600);
    totalSecs %= 3600;
    let minutes = Math.floor(totalSecs / 60);
    let secs = Math.floor(totalSecs % 60);
    let days = 0;
    let week = 0;

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
              let embedStats = new Discord.RichEmbed()
             .setTitle("Bot Information")
             .setColor("0xff0000")
             .addField("Bot Name", bot.user.username)
             .addField("Uptime ", uptime, true) //`${duration}`, true)
             .addField("Total Users", `${bot.users.size.toLocaleString()}`, false)
             .addField("Total Servers", `${bot.guilds.size.toLocaleString()}`, false)
             .addField("Total Channels ", `${bot.channels.size.toLocaleString()}`, true)
             .setThumbnail(bicon)
             .addField("Created On", "2020-1-1 00:00 AM")
             .addField("Creator/Coder", "psycho#4412")
             .addField("Support Server", "[Click Here](http://bit.ly/BuffSupport)")
             .setFooter("Current prefix for the bot is `=`!")
     
             message.channel.send(embedStats)
             })


 }

    module.exports.help = {
        name: "stats"
    }
