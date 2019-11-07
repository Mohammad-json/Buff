exports.run = (client,message,args) => {
    const Discord = require('discord.js');
   function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
	if (!args[0]) {
        const howgayembed = new Discord.RichEmbed()
	.setTitle(`How Gay? :gay_pride_flag:`)
        .setColor("0xff0000")
    .setDescription(`${message.author} is `+getRandomInt(101)+`% gay!`);
    message.channel.send(howgayembed);
	}
	else {
        const howgayembed = new Discord.RichEmbed()
    .setTitle(`How Gay? :gay_pride_flag:`)
    .setDescription(`${args[0]} is `+getRandomInt(101)+`% gay!`);
    message.channel.send(howgayembed);
	}
}
