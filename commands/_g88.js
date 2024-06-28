/*CMD
  command: /g88
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

  var OTP = Libs.Random.randomInt(1200000000, 4500000000);
var suv = Bot.getProperty("apik")
var amount = User.getProperty("amount")
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
