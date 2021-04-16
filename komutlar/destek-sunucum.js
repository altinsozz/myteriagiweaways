const codework1 = require('discord.js')

exports.run = function(client, message, args) {
  const codework = new codework1.MessageEmbed() 
                            
.setTitle("Destek Sunucum") //BOTUNUZUN ADINI GİRİN
.setDescription("İşte Destek sunucum: [TIKLA](https://discord.gg/Vp2hFdrxQc)")
.setColor("BLACK")


return message.channel.send(codework)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["destek-sunucum"],
permLevel: 0
  
};
  
exports.help = {
name: 'destek'
};