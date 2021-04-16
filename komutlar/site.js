const codework1 = require('discord.js')

exports.run = function(client, message, args) {
  const codework = new codework1.MessageEmbed() 
                            
.setTitle("Sitem") //BOTUNUZUN ADINI GİRİN
.setDescription("İşte Sitem: [TIKLA](https://www.myteriagiweaways.ml/)")
.setColor("RANDOM")


return message.channel.send(codework)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["sitem"],
permLevel: 0
  
};
  
exports.help = {
name: 'site'
};