const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (args.join(" ") == "") {
          message.reply("you need mention a user for this command! For example =avatar @psycho#4412");
        return;
    } else {
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`)
            .setColor("0xff0000")
            .setImage(image)
        message.channel.send(embed);
    }
}
