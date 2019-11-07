//If you don't like this help command, please check help.js

const Discord = require ("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    const musicCommands = fs.readFileSync("./music.txt", "utf8");
    const nsfwcommands = fs.readFileSync("./nsfw.txt", "utf8");
    const generalCommands = fs.readFileSync("./general.txt", "utf8");

    let bicon = bot.user.displayAvatarURL;
    
    //Sends embed help to direct messages (dm)
    //const client = message.guild.members.get(args[0]) || message.member;
    
    //Sends embed help to current channel
    const client = message.channel || message.channel;
  
    const funEmbed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("**__Moderation Commands__**")
    .setDescription(adminCommands)
    
    client.send(funEmbed);

    let infoEmbed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("**__Fun Commands__**")
    .setDescription(funcommands)

    client.send(infoEmbed);


    let modembed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("**__Info Commands__**")
    .setDescription(infoList)
    
    client.send(modembed);
  
      let musicembed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("**__Music Commands__**")
    .setDescription(musicCommands)
    
     client.send(musicembed);
  
        let genembed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("**__General Commands__**")
    .setDescription(generalCommands)
    .setFooter("Buff | Made by psycho#4412 | Total Commands: idk")
    
     client.send(genembed);
  
      let nsfwembed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("**__NSFW Commands__**")
    .setDescription(nsfwcommands)
    
     client.send(nsfwembed);
  
}

 module.exports.help = {
     name: "help" 
 }
