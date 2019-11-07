exports.run = async (client, message, args) => {

    const sayMessage = args.join(" ");

  const m = await message.channel.send('Loading...');
  if (message.content.includes('@everyone') || message.content.includes('@here')/* message.author.hasPermission("MENTION_EVERYONE")*/) {
    if (message.member.hasPermissions("MENTION_EVERYONE")) {

      m.edit('You got permissions to do that!');
        }
    else {
    m.edit('You cant ping everyone without the permission.');
    return;
    }
		}
    message.delete().catch(O_o=>{}); 
  
  m.delete();
  await(700);
    message.channel.send(`${sayMessage}`);
}
