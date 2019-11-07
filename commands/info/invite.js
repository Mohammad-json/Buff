const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {



    const embed = new Discord.RichEmbed()
        .setColor(0xF00000)
        .addField(':point_down: Buff invitation!', '[Click here to invite!](https://discordapp.com/oauth2/authorize?&client_id=611854299227488266&scope=bot&permissions=8)')
        .setFooter('Don\'t wait and use over 100+ nice commands by inviting Buff bot to your server!');

 message.channel.send({embed});
};
