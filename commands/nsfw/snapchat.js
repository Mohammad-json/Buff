const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("Please enable NSFW channel to use this command!")

    var subreddits = [
        'NSFW_Snapchat',
        'snapchatgw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`snapchat.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./snapchat.jpg`)
            })
        })
}