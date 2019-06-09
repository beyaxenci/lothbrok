const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'aktif') {
    msg.channel.sendMessage(' :white_check_mark: SUNUCU TEKRARDAN AKTİF ! İP : 109.230.228.149:30120 :white_check_mark:  @everyone');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'deaktif') {
    msg.channel.sendMessage(':no_entry_sign: SUNUCUMUZ ŞUAN KAPALIDIR! LÜTFEN BİLDİRİM GELENE KADAR GİRİŞ YAPMAYINIZ :no_entry_sign: @everyone');
  }
 });

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'restart') {
    msg.channel.sendMessage(':arrows_counterclockwise: SUNUCUMUZA RESTART GELECEKTİR LÜTFEN GÜVENLİ ÇIKIŞ YAPINIZ :arrows_counterclockwise: @everyone');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'instagram') {
    msg.reply('https://www.instagram.com/lothbrokroleplay/');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam canım hoşgeldin');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'rithkom') {
    msg.channel.sendMessage('Adaaaam :heart:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'rollocry') {
    msg.channel.sendMessage('Reisss :heart:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'uyarı') {
    msg.channel.sendMessage('LÜTFEN HERKES KULLANICI ADINI DEĞİŞTİRİP "kullanıcı adı/isim/yaş" şeklinde yazabilir mi @everyone');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kurucu') {
    msg.channel.sendMessage('ÇOK ACİL OLMADIKÇA KURUCULARI ETİKETLEMEYİNİZ @everyone');
    permLevel:
  }
});

client.login('lalalalaal');
