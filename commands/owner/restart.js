exports.run = async (client, message, args) => {
    let ownerID = "400703871086886913";
    if (message.author.id == ownerID) {
    client.destroy()
    .then(() => client.login('NjM3NjUwNTQwNTYxNjk0NzMw.XbXmUA._-zsnL-7YbAPSRncPzfS_Uva2o4'))
    .then(() => message.channel.send(`The bot was successfully restarted!`));
    }
    else {
      return;
    } 
  }