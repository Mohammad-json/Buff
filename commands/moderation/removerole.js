    const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Removerole Command", "Usage: !removerole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("0xff0000")
  .setTitle(`RemoveRole Command`)
  .addField("Description:", "Take off role from a member", true)
  .addField("Usage", "=removerole [@user] [role]", false)
  .addField("Example", "=removerole @psycho#4412 Moderator")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need to have permission: `MANAGE_MESSAGES`!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send("please specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.channel.send("Couldn't find that role. Make sure it's without `@`!");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("This user doesn't have that role!");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`**${rMember.user.username} got removed ${gRole.name} role!**`)


}

module.exports.help = {
  name: "removerole"
}