const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('RANDOM')
        .setFooter(`${msg.author.username} Başarıyla Yardım Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Myteria Giweaways Menüsü')
        .setThumbnail('https://cdn.discordapp.com/avatars/777570091172233297/e30cc5ede7f818a3858e5ee39103c7ee.png?size=2048')
        .addField('**🎉Çekliş Başlat🎉**','`!mçekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**🎉Çekiliş Yenile🎉**','  `!mçekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**🎉Çekiliş Liste🎉**',' `!mçekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
.addField('**<:YldzPng:815542522252099594>İstatistik<:YldzPng:815542522252099594>**', ' `!mistatistik` \nbotun istatistiklerini gösterir.',false)
        .addField('**🎉Çekiliş Bitir🎉**', ' `!mçekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
     .addField('**<:YldzPng:815542522252099594>Sponsor<:YldzPng:815542522252099594>**', ' `!msponsor` \nDiscord botumuzun sponsorunu gösterir.',false)
         .addField('**<:YldzPng:815542522252099594>Site<:YldzPng:815542522252099594>**', ' `!msite` \nDiscord botumuzun sitesini gösterir.',false)
          .addField("**Destek Sunucum**"," [Destek Sunucum](https://discord.gg/Vp2hFdrxQc)")
           .addField("** Bot Davet**"," [Davet Et](https://discord.com/api/oauth2/authorize?client_id=777570091172233297&permissions=8&scope=bot)")
        .setImage('https://cdn.discordapp.com/attachments/829773551539716126/830552248144232469/standard_5.gif')
               

  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş-yardım', 'yardım'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};