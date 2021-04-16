const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  try {

      let embed = new Discord.MessageEmbed()

      .setImage("https://cdn.discordapp.com/attachments/829773551539716126/830552248144232469/standard_5.gif")

      .setColor('RANDOM')

      .setTitle(`SPONSORUMUZ`)

      .setDescription(`

**Sponsorumuz RipperCloud**


[Discord Sunucusu : https://discord.gg/Q4n92nvsUd](https://discord.gg/WQQZgQ6tun)

**YÜKSEK PERFORMANS**

Diğer firmalardan ayrı sunucularımızda her hangi bir limitleme yok !!

**KOLAY KULLANIM**

Web Panelimiz Kullanımı Çok Basitter İstediğiniz Gibi Başlat,Durdur,Kapat Yapabilirsiniz! Panelimiz Açık Kaynaklı Paneldir Kullandığımız Panel: Pterodactyl Game Panel

**DDOS KORUMASI**

Tüm Sunucularımızda %99.98 DDOS Koruması Mevcuttur!

**KESINTISIZ GUC**

%99.99 Kesintisiz Hizmet Vermekteyiz

**HİZMETLER:**

      `)

      .addField("DISCORD BOT", `

2 GB RAM - 2 CPU

ANINDA TESLİM

TÜRKIYE LOKASYON

7/12 DESTEK

15₺ /AYLIK

[Link](https://discord.gg/WQQZgQ6tun)`, true)

.addField("MINECRAFT WEB PANEL", `

3 GB RAM - 3 CPU

ANINDA TESLİM

TÜRKIYE LOKASYON

SINIRSIZ SLOT

20₺ /AYLIK

[Link](https://discord.gg/WQQZgQ6tun)`, true)

.addField("RUST", `

4 GB RAM - 4 CPU

TÜRKIYE LOKASYON

SSD DISK

30₺ / AYLIK

[Link](https://discord.gg/WQQZgQ6tun)`, true)

      .setFooter("RipperCloud")

return message.channel.send(embed)

   

  } catch (err) {

    console.error(err)

  }

};

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ["sponsorumuz"],

    permLevel: 0

};

exports.help = {

    name: "sponsor"

};