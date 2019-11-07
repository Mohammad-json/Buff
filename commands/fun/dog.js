const snekfetch = require('snekfetch');
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    const embed = new Discord.RichEmbed()
    .setFooter(`Can't see image? `+ body.url)
    .setTitle("Woof! Woof! 🐶")
    .setColor("0xff0000")
    .setImage(body.url);
  
    message.channel.send(embed)

}
module.exports.help = {
  name: "dog"
}