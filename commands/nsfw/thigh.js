const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'thigh'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
    } else {
    msg.channel.send("Please enable NSFW channel to use this command!")
  }
};