/*CMD
  command: /confirm
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

var stt = Bot.getProperty("alertsChannel")
if (request.data) {
  var chatID = request.message.chat_id
  var messageID = request.message.message_id

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  })
}


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

var amount = User.getProperty("amount")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")

balance.remove(parseFloat(amount))

var currency = Bot.getProperty("currency")
var userText =
  "<b>✅ Your withdrawal has been Sent\n\n💸 Amount :</b> <code>" +
  amount +
  " " +
  currency +
  "</code>\n👝 <code>" +
  currency +
  "</code> <b>wallet : xRocket</b> <code> </code>\n\n<b>✔️ Your withdrawal will be processed  successfully.</b>"

Api.sendMessage({
  text: userText,
  parse_mode: "html"
})

var userName = user.first_name
var userID = user.telegramid
var userLink = "<a href='tg://user?id=" + userID + "'>" + userName + "</a>"
var username = "@" + user.username
var botLink = "@" + bot.name

var adminText =
    "The amount of "+amount+" "+currency+" was successfully paid to "+userLink+"\n\n Bot : "+botLink+""

  Api.sendMessage({
    chat_id: "@airdrop_city_Payment",
    text: adminText,
    parse_mode: "html"
  })

  var OTP = Libs.Random.randomInt(1200000000, 4500000000);


let ch = Bot.getProperty("currency")
var transactionLink = user.telegramid
let url = "https://pay.ton-rocket.com/app/transfer"
HTTP.post({
  url: url,
  body: JSON.stringify({
    tgUserId: transactionLink,
    currency: ch,
    amount: amount,
    transferId: "plo-"+OTP+"",
    description: "Your withdrawal has been paid successfully"
  }),
  headers: {
    accept: "application/json",
    "Rocket-Pay-Key": "1c36ca48e661d713bd56eae00",
    "Content-Type": "application/json"
  },
  success: "/mainMenu"
})



