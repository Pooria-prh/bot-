/*CMD
  command: /joined2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let ch = Bot.getProperty("channel2")
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let id = user.telegramid
Api.getChatMember({ 
chat_id : ch,
user_id : id,
on_result :"/check2"})
}

