const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
   
    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Please type =dm [userid] [message]. For example =dm 400703871086886913 Wassup! If u don't have Copy ID feature, please use =userid [@user]")
    

   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username)
   .setColor("0xff0000")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle("You got new message!")
   .addField("Message:", sayMessage)
   .addField("Message from:", "[Click Here!](https://discordapp.com/invite/CaBVadF)")
   .setTimestamp()
   
    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setDescription(`Message successfully sent to <@${id}>!`);

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});


        message.delete();

      }
      module.exports.help = {
        name: "answer",
        description: 'Owner Only',
        usage: 'answer <ID> <message>'
      }
