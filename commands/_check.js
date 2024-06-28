/*CMD
  command: /check
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

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/joined2")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join all channel*")
}
