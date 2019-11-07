exports.run = async (client,message,args) => {
  //let dUser = message.guild.member(353190313570861056);
    //if (!dUser) return message.channel.send("Can't find user!")
 //   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args;
    if(dMessage.length < 1) return message.reply('You must supply a message!')
 
    client.users.get("400703871086886913").send(`Suggestion from ${message.author} [${message.author.id}] :\n\n ${dMessage}`);
 
    message.reply(`suggestion will be reviewed within 24 hours. If it will follow requirements, it will be added!`)
}