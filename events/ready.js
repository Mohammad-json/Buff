const Discord = require("discord.js");

const logChannel = "637683485334700053";

module.exports = client => {
  console.log(
    `Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`
  );

  client.user.setPresence({ game: { name: `buffbot.ml | =help` }, type: 0 });
  let embed = new Discord.RichEmbed()
    .setTitle("Everyone is ghey!")
    .setColor(client.config.embed_color_default)
    .setTimestamp()
    .setDescription(
      `Serving in ${client.channels.size} channels on ${client.guilds.size} servers for a total of ${client.users.size} users.`
    );
  client.channels.get(logChannel).send(embed);

  let actarr = [
    "Noburuu shower uwu",
    "Gabe succ a fat dicc",
    "Sv be a ghey furry",
    "Canny be the worst mod"
  ];
};// k k k 
//brb imma afk

/*Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
*/