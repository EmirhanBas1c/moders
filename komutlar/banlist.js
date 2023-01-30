const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`<a:kalp:854040909757939712> , Banlanan Kullanıcı bulunamadı <a:kalp:854040909757939712>`)
       .setColor("RED");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle("<a:kalp:854040909757939712> Ban Listesi: Sunucudan Banlananlar.")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste","ban liste"],
  permLevel: 0
};
module.exports.help = {
  name: 'banlist',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};
