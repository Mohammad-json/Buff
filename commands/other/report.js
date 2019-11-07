module.exports = { 
    config: {
        name: "report",
        description: "reports a user of the guild",
        usage: "!report <user> <reason>",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {

        // mentioned or grabbed user
        let target = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!target) return message.channel.send("Please provide a valid user! Note: you must have channel called reports to get all reports from members!")

        // reasoning definition
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.tag}**!`)

        // grab reports channel
        let sChannel = message.guild.channels.find(x => x.name === "reports")

        // send to reports channel and add tick or cross

        message.channel.send("Your report has been filled to the staff team. Thank you!").then(m => m.delete(15000))
        sChannel.send(`**${message.author.tag}** has reported **${target.user.tag}** for **${reason}**. Should we ban/kick/mute him?`).then(async msg => {
            await msg.react("✅")
            await msg.react("❌")
        })

  }
}