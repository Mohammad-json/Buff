exports.run = (client,message,args) => {
  try {
    const snekfetch = require('snekfetch');
    let msg = message;
    const Discord = require('discord.js');
			snekfetch.get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
        .setTitle("Meow Meow :cat:")
        .setColor('0xff0000')
				.setImage(res.body.file)
        .setFooter(`Can't see image? `+ res.body.file)
				return msg.channel.send({embed});
			});
		} catch(err) {
      let msg = message;
			return msg.channel.send(err.stack);
		}
}