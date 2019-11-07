const Discord = require("discord.js");

//Enter your channel id, to get message when the bot is up.
const logChannel = "637683485334700054";

module.exports = client => {
  console.log(
    `Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`
  );

  //Change your playing status game
  client.user.setPresence({ game: { name: `buffbot.ml | =help` }, type: 0 });
  
  //This is the message where it will send in your channel, after the bot is up.
  let embed = new Discord.RichEmbed()
    .setTitle("The bot is up!")
  //You can change default embed color in config.json
    .setColor(client.config.embed_color_default)
    .setTimestamp()
    .setDescription(
      `Serving in ${client.channels.size} channels on ${client.guilds.size} servers for a total of ${client.users.size} users.`
    );
  client.channels.get(logChannel).send(embed);

  let actarr = [
    "wwowowoowowoowowo",
    "wowoowowowowoowowo",
    "wowoowowowowoowow",
    "wowoowowowoowowowo"
  ];
};

/*Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
*/
