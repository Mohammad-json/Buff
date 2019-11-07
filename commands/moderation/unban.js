exports.run = (bot, message, args) => {
    const reason = args.slice(1).join(' ');
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const user = args[0];
    const modlog = bot.channels.find('name', 'logs');
    if (!modlog) return message.reply('Please create channel called "Logs"!');
    if (reason.length < 1) return message.reply('please specify banned userID to unban!');
    if (!user) return message.reply('you must supply a reason for the unban!').catch(console.error);
    message.guild.unban(user);
    message.reply(`${user} was successfully unbanned!`)
};