const Discord = require ("discord.js");
const fs = require("fs");///nice help me lol
/// on what it loads all commands but doesnt sents the bot is up and its down
//coe to ready.js ok
module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    const musicCommands = fs.readFileSync("./music.txt", "utf8");
    const nsfwcommands = fs.readFileSync("./nsfw.txt", "utf8");
    const generalCommands = fs.readFileSync("./general.txt", "utf8");

    let bicon = bot.user.displayAvatarURL;
    const client = message.guild.members.get(args[0]) || message.member;

    //const client = message.channel || message.channel;
  
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
    .setFooter("Buff | Made by psycho#4412 and SuperHero#0001 | Total Commands: 91")
    
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