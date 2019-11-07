exports.run = (client, message, args) =>{
    const deleteCount = parseInt(args[0], 10);
    async function clear() {
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
          message.channel.send("You need to have permission: `MANAGE_MESSAGES`!");
        }
        
        else{        
          if(!deleteCount || deleteCount < 2 || deleteCount > 5000)
            return message.channel.send("Please provide a number between 2 and 5000 for the number of messages to delete");
            message.channel.send("Specified messages got deleted!");          
          
          message.delete();
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
    }
    clear();
}