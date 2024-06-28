/*CMD
  command: كمن
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var dp = Bot.getProperty("Deposit_status")
var adm = Bot.getProperty("adminID")
if (dp == "✅") {
  if (adm == user.telegramid) {
  } else {
    Bot.sendMessage("*🛠 Withdrawal Is Currently Off!*")
    return
  }
}
var ad = User.getProperty("trx_add")
if (!ad || ad == undefined) {
  var currency = "TRX"

  var cur = "SETUP"
  var cod = Bot.getProperty("api_list", { list: {} })
  var url = Libs.Webhooks.getUrlFor({
    command: "/get_trx",
    user_id: user.id
  }) //onsuccess command
  HTTP.post({
    url: cod.list[cur].deposi,
    body: {
      secretkey: cod.list[cur].apikey,
      Permitkey: cod.list[cur].permitkey,
      currency: currency,
      user: user.telegramid,
      webhook: url
    }
  })
  return
}
var tt =
  "<b>👁‍🗨 This Is Your Personal Deposit Address:</b>\n\n<code>" +
  ad +
  "</code>\n\n☣ <b> Minimum Deposit 1 TRX </>"
var inl = [[{ text: "✅ Check Payment", callback_data: "/chck_trx" }]]
let Photo_Wallet_Address =
  "http://api.qrserver.com/v1/create-qr-code/?data=" + ad + "!&size=512x512"
Api.sendPhoto({
  photo: Photo_Wallet_Address,
  caption: tt,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inl }
})

