const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {



    const embed = new Discord.RichEmbed()
        .setColor(0xF00000)
        .addField('=nsfw', 'Some nsfw?')
        .setDescription('Categories')
        .setFooter('The bot Prefix is "="!');

 message.channel.send({embed});
};
