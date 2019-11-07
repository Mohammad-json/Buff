exports.run = async (client, message, args) => {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 

    const sayMessage = args.join(" ");
    /*sayMessage.includes == "@everyone"; {
      return;
    }*/
  const m = await message.channel.send('Loading...');
  if (message.content.includes('@everyone') || message.content.includes('@here')/* message.author.hasPermission("MENTION_EVERYONE")*/) {
			//message = m.slice(1);
    if (message.member.hasPermissions("MENTION_EVERYONE")) {
       // continue
     // m.delete();
      m.edit('You got permissions to do that!');
        }
    else {
    m.edit('You cant ping everyone without the permission.');
    return;
    }
		}
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
  
    // And we get the bot to say the thing: 
  /*let msg = message.channel.send;
  msg(sayMessage);*/
  m.delete();
  await(700);
    message.channel.send(`${sayMessage}`);
}
