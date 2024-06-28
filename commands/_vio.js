/*CMD
  command: /vio
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send bots.business email you want to transfer
  keyboard: 
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done, Bot has been sent to that email")
