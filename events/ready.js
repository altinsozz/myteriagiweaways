const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');



module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
      "!myardım",
       "botumuzun sitesi:https://www.myteriagiweaways.ml/",
     "gelişmiş giweaways botu🎉",
    "@Myteria Giweaways",
   "✌Sponsor :RipperCloud",

 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/myteriagiweaways' })
}, 5000);
    console.log(`Myteria Giweaways başarıyla giriş yaptı.`);
}