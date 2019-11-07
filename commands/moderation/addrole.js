const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("0xff0000")
    .addField("AddRole Help", "Usage: =addrole [@user] [role]")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("0xff0000")
  .setTitle(`Addrole command`)
  .addField("Description:", "Add role to selected member", true)
  .addField("Usage", "=addrole [@user] [role]", false)
  .addField("Example", "=addrole @psycho#4412 Member")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You need to have permission: `MANAGE_ROLES`!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Please Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role. Make sure it's without `@`!");

  if(rMember.roles.has(gRole.id)) return message.channel.send("This user already have that role.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`**${rMember.user.username} now have the ${gRole.name} role!**`)

  
}

module.exports.help = {
  name: "addrole",
  description: 'Add role to someone',
  usage: 'addrole <@user> <Role>'
}
