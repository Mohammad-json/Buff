const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    var dice = [1, 2, 3, 4, 5, 6];

    const embed = new Discord.RichEmbed()
        .setFooter('Played by ' + `${message.author.username}#${message.author.discriminator}`)
        .setColor("#ff0000")
        .addField("First dice", dice[Math.floor(Math.random()*dice.length)], true)
        .addField("Second dice", dice[Math.floor(Math.random()*dice.length)], true)
        .setTimestamp();

    return message.channel.send(embed);    
}