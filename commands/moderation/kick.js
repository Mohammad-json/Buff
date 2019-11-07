exports.run = (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("You need to have permission: `KICK_MEMBERS`!");
    }
    else{
        
        if(!member)
            return message.channel.send("Please mention a valid member of this server!");
        if(!member.kickable) 
            return message.channel.send("I cannot kick this member! Make sure my role is higher than specified role with kick permission.");

        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "no reason provided.";
        member.kick(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag}. Reason: ${reason}`);
    }
}
