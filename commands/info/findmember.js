module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type 1-10 letters of member to search!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    message.channel.send("**Here's the list of the members:** \n" + matches.map(u => u.tag));

     }
    
        module.exports.help = {
            name: "finduser"
        }