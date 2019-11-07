const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need to have permission: `ADMINISTRATOR`!');

    if (!args[0]) return message.channel.send('Proper Usage: =poll [question]');

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by ${message.author.username}#${message.author.discriminator}`);


    let msg = await message.channel.send(embed);

    await msg.react('✅'); 
    await msg.react('❌');

    message.delete({timeout: 1000});

} 
