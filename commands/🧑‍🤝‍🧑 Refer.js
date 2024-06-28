/*CMD
  command: 🧑‍🤝‍🧑 Refer
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


var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var inviteLink = Libs.ReferralLib.getLink()
var referCount = Libs.ReferralLib.getRefCount()
var perRefer = Bot.getProperty("perRefer")
var currency = Bot.getProperty("currency")
var text = "Per Ref : "+perRefer+" "+currency+"  \n\nyour ref link:\n" +inviteLink +"\n\n 💬 If you make fake referrals, the bot will not pay you  "
Api.sendMessage({
  text: text,
  parse_mode: "html"
})

