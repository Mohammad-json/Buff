//If you want to host your bot on glitch.com, all u need is use uptimerobot.com
/* const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000); */

//Packages
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const db = require("quick.db");
var jimp = require("jimp");
const prompter = require("discordjs-prompter");
const config = require("./config.json");
client.config = config;

//You can change any prefix in here, default is "="
const PREFIX = "=";
const ownerID = process.env.OWNER;

//The client game is on events/ready.js
/*client.on("ready", () => {
  client.user.setPresence({ game: { name: `buffbot.7m.pl | =help` }, type: 0 });
});*/

//Event Handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

//Command Handler
client.commands = new Enmap();
client.talkedRecently = new Set();
let cmdsnumber = 0;
client.cmds = cmdsnumber;

fs.readdir("./commands/moderation/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);

    client.cmds++;
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);

    client.cmds++;
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);

    client.cmds++;
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/nsfw/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/nsfw/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);

    client.cmds++;
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/music/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/music/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);

    client.cmds++;
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/other/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/other/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);

    client.cmds++;
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/owner/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/owner/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);

    client.cmds++;
    client.commands.set(commandName, props);
  });
});
//Welcomer

//Login as client
client.login("YOUR-BOT-TOKEN");
/*
https://discordapp.com/oauth2/authorize?client_id=PUTTHEREYOURBOTCLIENTID&scope=bot&permissions=8
*/
