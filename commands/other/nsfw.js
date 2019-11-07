// This command requires the discord-js package to create embeds
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {



    const embed = new Discord.RichEmbed()
        .setColor(0xF00000)
        .addField('=modcmds', 'Gives all moderation commands')
        .addField('=funcmds', 'Gives all fun commands')
        .addField('=economycmds', 'Gives all economy commands')
        .addField('=reactioncmds', 'Gives all reaction commands')
        .addField('=infocmds', 'Gives all information commands')
        .addField('=invitecmds', 'Gives all invitation commands')
        .addField('=nsfwcmds', 'Gives all nsfw commands')
        .setDescription('Categories')
        .setFooter('The bot Prefix is "="!');

 message.channel.send({embed});
};