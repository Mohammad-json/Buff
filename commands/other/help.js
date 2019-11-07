//If you don't like this help command, please check help2.js

exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    if (!args[0]) {
      const exampleEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("Support Server")
        .setURL("https://discordapp.com/invite/CaBVadF")
        .setDescription("`Buff Help`\nHelp menu gives you an tutorial how to use the bot. You can get additional info of command by doing `=help command` () on help command means its optional.\nInvite Link: [Here](https://discordapp.com/oauth2/authorize?client_id=637650540561694730&scope=bot&permissions=8)")
        .addField("**Moderation Commands [4]**", "`ban`, `kick`, `unban`, `poll`")
        .addField("**Fun Commands [6]**", "`8ball`, `say`, `meme`, `cat`, `howgay`, `dog`")
        .addField("**General Commands [2]**", "`help`, `ping`, `afk`")
        .addField("**Informative Commands [4]**", "`serverinfo`, `botinfo`, `avatar`, `userinfo`")
        .addField("**Economy commands [10]**", "`work`, `daily`, `monthly`, `weekly`, `pay`, `store`, `buy`, `rob`, `inventory`, `balance`")
        .addField("**Bugs & Errors [1]**", "`report`")
        .addField("**Leveling Commands**", "`points`, `leaderboard`")
        .setTimestamp()
        .setFooter("Buff | Made by psycho#4412 | Total commands: "+client.cmds);
  
      message.channel.send(exampleEmbed);
    }
    let prefix = "=";
    if(args[0] == "poll") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: poll', 'Usage: `'+prefix+'poll message`\nAlias(es): `none`\nPermission(s): `ADMINISTRATOR`\nDescription: Makes a poll.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "balance") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: balance', 'Usage: `'+prefix+'balance`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: See your balance.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "inventory") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: inventory', 'Usage: `'+prefix+'inventory`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: See your inventory and whats inside of it.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "rob") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: rob', 'Usage: `'+prefix+'rob user`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Rob someone and get something from their money.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "buy") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: buy', 'Usage: `'+prefix+'buy item`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Buy items from store.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "store") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: store', 'Usage: `'+prefix+'store`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: See bots item store.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "pay") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: pay', 'Usage: `'+prefix+'pay user money`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Pay someone some money.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "weekly") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: weekly', 'Usage: `'+prefix+'weekly`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Get your weekly money.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "monthly") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: monthly', 'Usage: `'+prefix+'monthly`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Get your monthly money.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "work") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: work', 'Usage: `'+prefix+'work`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Work somewhere')
        message.channel.send(banEmbed);
    }
    if(args[0] == "daily") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: daily', 'Usage: `'+prefix+'daily`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Get your daily money.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "help") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: help', 'Usage: `'+prefix+'help (command)`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows help menu')
        message.channel.send(banEmbed);
    }
    if(args[0] == "ping") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: ping', 'Usage: `'+prefix+'ping`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows bot ping to discord api.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "serverinfo") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: serverinfo', 'Usage: `'+prefix+'serverinfo`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows your current guild information (guild only)')
        message.channel.send(banEmbed);
    }
    if(args[0] == "botinfo") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: botinfo', 'Usage: `'+prefix+'botinfo`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows bot current status')
        message.channel.send(banEmbed);
    }
    /*if(args[0] == "8ball") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: avatar', 'Usage: `'+prefix+'avatar (user)`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows your current guild information (guild only)')
        message.channel.send(banEmbed);
    }*/
    if(args[0] == "report") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: report', 'Usage: `'+prefix+'report message`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Reports an bug/error to bot developers')
        message.channel.send(banEmbed);
    }
    if(args[0] == "meme") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: meme', 'Usage: `'+prefix+'meme`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows random meme from r/dankmemes.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "say") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: say', 'Usage: `'+prefix+'say msg`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Make bot say anything you want.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "cat") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: cat', 'Usage: `'+prefix+'cat`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows random cat from aws.random.cat.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "howgay") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: howgay', 'Usage: `'+prefix+'howgay (user)`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: See howgay someone is.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "dog") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: dog', 'Usage: `'+prefix+'dog`\nAlias(es): `none`\nPermission(s): `SEND + READ MESSAGES`\nDescription: Shows random dog from r/DOG.')
        message.channel.send(banEmbed);
    }
    if(args[0] == "kick") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: kick', 'Usage: `'+prefix+'kick user reason`\nAlias(es): `none`\nPermission(s): `KICK MEMBERS`\nDescription: Kicks user from the guild! (guild only)')
        message.channel.send(banEmbed);
    }
    if(args[0] == "unban") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: unban', 'Usage: `'+prefix+'unban userid reason`\nAlias(es): `none`\nPermission(s): `BAN MEMBERS`\nDescription: Unbans user from the guild! (guild only)')
        message.channel.send(banEmbed);
    }
    if(args[0] == "ban") {
        const banEmbed = new Discord.RichEmbed()
        .addField('Command Help: ban', 'Usage: `'+prefix+'ban user reason`\nAlias(es): `none`\nPermission(s): `BAN MEMBERS`\nDescription: Bans user from the guild! (guild only)')
        message.channel.send(banEmbed);
    }
}
