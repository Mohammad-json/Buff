const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("You need to have permission: `MANAGE_MESSAGES`!")
    const modlog = message.guild.channels.find(channel => channel.name === 'logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Couldn't find that user!")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Muted")) return message.channel.send('This member is not muted!')
    if (!reason) return message.channel.send('Please specify a reason!')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      message.reply("Usage: =unmute <user> <reason>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "logs");
  if (!muteChannel) return message.channel.send('**Please create a channel called `logs`**')

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Unmute Logs')
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .addField("Channel", message.channel)
            .setColor('0xff0000')
        modlog.send(muteembed)
  
  
}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "unmute",
    category: "MODERATION"
}