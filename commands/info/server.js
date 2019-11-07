const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {



    const embed = new Discord.RichEmbed()
        .setColor(0xF00000)
        .addField(':point_down: Support Server!', '[Click here to join!](https://discordapp.com/invite/CaBVadF)')
        .setFooter('Please join our Buff Support server with very friendly community and get answered your questions!');

 message.channel.send({embed});
};
