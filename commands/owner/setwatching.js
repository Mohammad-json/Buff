//Make sure to enter your User ID!
const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('400703871086886915')) return message.channel.send("You cant use this command!");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setDescription('Please enter name of watching status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, type: 3 } });
  const embed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setDescription('You sucessfully changed streaming status');
  message.channel.send({ embed });
}};
