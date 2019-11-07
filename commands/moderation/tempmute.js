const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You need to have permission: `MANAGE_MESSAGES`!");
    if (args[0] == "help") {
        message.reply("Usage: =tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("cannot find that user! Usage: `=tempmute <@user> <1s/m/h/d> <reason>`");
    if (!tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You need to have permission: `MANAGE_MESSAGES`!");
    let reason = args.slice(2).join(" ");

    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "000000",
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
    if (!mutetime) return message.reply("The role called `Muted` has been created!");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`You have been muted for ${mutetime}!`)
    } catch (e) {
        message.channel.send(`The user is already muted for ${mutetime}!`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription('Temp Mute Logs')
        .setColor("0xff0000")
        .addField("User", tomute)
        .addField("Reason", reason)
        .addField('Moderator', message.author)
        .addField("Channel", message.channel)
       .addField("Mute time", mutetime);

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if (!incidentschannel) return message.reply("Please create channel called `logs!`");
    incidentschannel.send(muteembed);
  message.channel.send(`<@${tomute.id}> was succesfully muted for ${mutetime}!`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> have been expired mute time!`);
    }, ms(mutetime));
}
