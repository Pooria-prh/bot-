/*CMD
  command: 🏧 Withdraw
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


var balance = Libs.ResourcesLib.userRes("balance")
var minimumWithdrawal = parseFloat(Bot.getProperty("minimumWithdrawal"))
var currency = Bot.getProperty("currency")

if (balance.value().toFixed(2) < minimumWithdrawal) {
  var lessText =
    "<i>⚠️ Minimum withdrawal is </i> <code>" +
    minimumWithdrawal +
    " " +
    currency +
    "</code>"

  Api.sendMessage({
    text: lessText,
    parse_mode: "html"
  })
  return
}

var text = "*💸 Send the amount which you want to withdraw.*"
var keyboard = "❌ Cancel"

Bot.sendKeyboard(keyboard, text)

Bot.runCommand("/withdraw")

