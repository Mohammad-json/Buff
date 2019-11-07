const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.RichEmbed()
.setColor("0xff0000")
.setDescription(`${message.author} decied to kill himself. We will miss u :innocent:`)
message.channel.send(emb)

} else {

let emb = new Discord.RichEmbed()
.setColor("0xff0000")
.setDescription(`${killed} was killed by ${message.author}. You will go to hell :smiling_imp:`)

message.channel.send(emb)


}

}
module.exports.help = {
  name: "kill"
}