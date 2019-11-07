const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

    if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "I don't know", "Ask again later!", "Shut up", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Never", "Whatever", "No u", "Okay", "Ok", "Wow", "Hehe", "Kewl", "Nah", "Cool", "Right", "Ofcourse", "Ofcourse no", "Nope"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()
 
    .setFooter('Requested by ' + `${message.author.username}#${message.author.discriminator}`)
    .setColor("0xff0000")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)


 }

    module.exports.help = {
        name: "8ball"
    }
