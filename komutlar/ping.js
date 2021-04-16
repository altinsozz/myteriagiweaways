const Discord = require('discord.js');
exports.run = function(client, message, args) {
const exampleEmbed = new Discord.MessageEmbed()
  message.reply('İşte Benim Pingim = **' + client.ws.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};