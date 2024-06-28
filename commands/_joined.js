/*CMD
  command: /joined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let ch = Bot.getProperty("channel1")

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let id = user.telegramid
Api.getChatMember({ 
chat_id : ch,
user_id : id,
on_result :"/check"})
}

