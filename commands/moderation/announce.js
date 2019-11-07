const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("You need to have permission: `ADMINISTRATOR`!");
    }
    else{

      const color = "ff0000"

      const text = args.slice(0).join(" ");

      if (text.length < 1) return message.channel.send("Please write message to announce!")
      const embed = new Discord.RichEmbed()
      .setColor("0x" + color)
      .setTitle("Important Announcement:")
      .setDescription(text);
      message.channel.send("@everyone")
      message.channel.send({embed})
      message.delete().catch();
    }




  module.exports.help = {
    name:"ann"
  }
}
