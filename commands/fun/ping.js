exports.run = async (client, message, args) => {
  // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
  // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
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
    // this is expected
  }
 
}
if (!args[0]) {
  // inside a command, event listener, etc.
  const exampleEmbed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setTitle("Loading...")
    /*.setURL("https://discord.js.org/")
    .setAuthor(
      "Some name",
      "https://i.imgur.com/wSTFkRM.png",
      "https://discord.js.org"
    )
    .setDescription("Some description here")
    .setThumbnail("https://i.imgur.com/wSTFkRM.png")
    .addField("Regular field title", "Some value here")
    .addBlankField()
    .addField("Inline field title", "Some value here", true)
    .addField("Inline field title", "Some value here", true)
    .addField("Inline field title", "Some value here", true)
    .setImage("https://i.imgur.com/wSTFkRM.png")
    .setTimestamp()
    .setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png");*/
 
 // channel.send(exampleEmbed);
  const m = await message.channel.send(exampleEmbed);
  const noobEmbed = new Discord.RichEmbed()
  .setColor("0xff0000")
  .setTitle("Pong!")
  .setDescription(`Latency: ${m.createdTimestamp - message.createdTimestamp}ms. \nDiscord API: ${Math.round(client.ping)}ms`)
  .setTimestamp();
 
 
  //const m = await message.channel.send(exampleEmbed);
  m.edit(noobEmbed);
}
};