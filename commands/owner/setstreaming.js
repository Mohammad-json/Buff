const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('400703871086886913')) return message.channel.send("You cant use this command!");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setDescription('Please enter name of streaming status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, url: 'https://twitch.tv/buff_bot', type: 1 } });
  const embed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setDescription('You sucessfully changed streaming status');
  message.channel.send({ embed });
}};