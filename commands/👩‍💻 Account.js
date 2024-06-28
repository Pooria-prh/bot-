/*CMD
  command: 👩‍💻 Account
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

var userName = user.first_name
var username = "@" + user.username
var userID = user.telegramid
var userLink = "<a href='tg://user?id=" + userID + "'>" + userName + "</a>"
var currency = Bot.getProperty("currency")
var balance = Libs.ResourcesLib.userRes("balance")
var text =
  "<b>🆔 User ID :</b> <code>" +
  userID +
  "</code>\n\n<b>💸 Balance :</b> <code>" +
  balance.value().toFixed(2) +
  " " +
  currency +
  "</code>"

Api.sendMessage({
  text: text,
  parse_mode: "html"
})

