const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
  const db = require('quick.db');
  
  
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`${message.guild.emojis.map(e=>e.toString()).join(" **|** ") ? message.guild.emojis.map(e=>e.toString()).join(" **|** ") : 'emoji yok'}`)
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
    kategori: "sunucu",
 
};

exports.help = {
  name: 'emojiler',
  description: 'Bulunduğunuz sunucudaki emojileri gösterir.',
  usage: 'emojiler',

};