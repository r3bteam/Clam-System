const Discord = require('discord.js');
const client = new Discord.Client();
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');

client.on('message',async message => {
    var prefix = "-";
    if(message.content.startsWith(prefix + "bc")) {
      if(!message.member.hasPermission('ADMINISTRATOR')) return;
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {
  
      let awaitM = message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
        let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 20000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
          message.guild.members.forEach(member => {
            msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
            collected.first().delete();
            member.send(`${thisMessage}\n\n${member}`);
          });
          }
        });
      });
      });
    }
  });
    
                    client.on("message", message => {
                         var prefix = "-";
                        if (message.content.startsWith(prefix + "obc")) {
                                     if (!message.member.hasPermission("ADMINISTRATOR"))  return;
              let args = message.content.split(" ").slice(1);
              var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
             m.send(`${argresult}\n ${m}`);
            })
             message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
             message.delete(); 
            };     
            });
client.on("message", message => {
 var prefix = "-";
let num = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "vote")) {
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if(isNaN(num)) return message.channel.send("ارقام فقط");
let votes = [
"رتبة اكتيف",
 "غير اسمك في الدسكورد الى حمار بجدارة",
  "حول للمقدم 1 كريدت",
 "افتح مايك وسمعنا صوتك وانت تغني",
 "غير صورتك الى فرس نهر",
 "المقدم يعطيك 5000 كريدت",
 "رحمتك اختار رقم ثاني",
 "حط صورتك بالدسكورد هذه https://pbs.twimg.com/media/Dba0D1uXcAA7tjI.jpg",
  "افتح المايك وقول الله يلعن اونر السيرفر",
  "منشن ثالث شخص بالشات وقله يلعن امك",
  "مبروك كسبت 20 الف كريدت من المقدم",
  "ياحظك رحمتك اخترلك رقم ثاني",
   "جيب التلفون او من البي سي واختر ثالث صوره من الاستوديو وارسلها وارسل دليل انه هيه ثالث صوره",
 "فك ميوت وعطي بوسه للمقدم",
  "ياحظك رحمتك اخترلك رقم ثاني",
   "فك ميوت وسب ع شخص يمنشلك ياه المقدم",
  "افتح المايك وقول الله يلعن اونر السيرفر",
 "خلي المقدم يمنشن شخص وتروحله خاص تقله احبك وصور وارسل",
  "غير اسمك في الدسكورد الى حمار بجدارة",
  "دق ع ابوك وقله احبك",
  "دق ع ابوك قله اكرهك",
 "غير اسمك في السيرفر واكتب السيرفر كله تاج راسي",
 "غير اسمك في الدسكورد الى حمار بجدارة",
 "خلي المقدم يمنشن شخص وروح خاصه وسبه وصور ",
 "فك ميوت وغني اغنيه تكوتا",
  "حول 10000 كريدت للمقدم",
 "روح لاونر السيرفر وقله الله يلعن خيرك",
 "قول اسم حبيبتك او منشنها",
 "فك ميوت وقول انا خروف ماااااااااع",
"kya"
]
let voted = votes[parseInt(num)]
if(!voted) return message.channel.send("لم يتم العثور")
message.channel.send(voted)
}
});

const devs = ["450711003324350485"]

const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Clam'));
});

client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_ROLES")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطآ تكلم مع الادارة **');
   
       
    }
})
client.on('message', message => {
  var prefix = "-";
  const guild = message.guild;

  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} Banned From The Server By : <@${message.author.id}> Reason: ${reason} ! :airplane: **  `)
  
guild.owner.send(`سيرفر : ${guild.name}
**تم تبنيد** :${user.tag}  
**بواسطة** : <@${message.author.id}>
**السبب** : ${reason} `)

}
});

            client.login(process.env.BOT_TOKEN);
