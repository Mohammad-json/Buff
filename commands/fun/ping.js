exports.run = async (client, message, args) => {

  const Discord = require("discord.js");
  function ping(host, pong) {
 
  var started = new Date().getTime();
 
  var http = new XMLHttpRequest();
 
  http.open("GET", "https://" + host, /*async*/true);
  http.onreadystatechange = function() {
    if (http.readyState == 4) {
      var ended = new Date().getTime();
 
      var milliseconds = ended - started;
 
      if (pong != null) {
        pong(milliseconds);
      }
    }
  };
  try {
    http.send(null);
  } catch(exception) {
  }
 
}
if (!args[0]) {
  const exampleEmbed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("Loading...")
 
  const m = await message.channel.send(exampleEmbed);
  const noobEmbed = new Discord.RichEmbed()
  .setColor("0xff0000")
  .setTitle("Pong!")
  .setDescription(`Latency: ${m.createdTimestamp - message.createdTimestamp}ms. \nDiscord API: ${Math.round(client.ping)}ms`)
  .setTimestamp();
 
   m.edit(noobEmbed);
}
};
