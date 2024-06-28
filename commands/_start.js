/*CMD
  command: /start
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

var chst = Bot.getProperty("chst")
var username = "@" + user.username
if (username === "@null") {
  var banText = "<i>🚫You cannot use our bot.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
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

var newUser = User.getProperty("newUser")

if (!newUser) {
  User.setProperty("newUser", "Yes", "string")

  var admin = Bot.getProperty("admin")
var stt = Bot.getProperty("alertsChannel")
  var userName = user.first_name
  
  var userID = user.telegramid
  var userLink = "<a href='tg://user?id=" + userID + "'>" + userName + "</a>"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")

  status.add(1)

  var adminText =
    "<b>🆕 New user notification 🆕\n\n👩‍💻 Name : " +
    userName +
    "\n👉 Username : " +
    username +
    "\n🔗 User link : " +
    userLink +
    "\n🆔 User ID :</b> <code>" +
    userID +
    "</code>\n\n<b>📊 Total users :</b> <code>" +
    status.value() +
    "</code>"

  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "html"
  })

  /*var url = "https://api.projectoid.site/v1/telegram/botpanel/adduser.php"
  var botID = bot.token.split(":")[0]
  var accessToken = "bIgJdTIcTVvP66VEwxpCXCMeOAgTfHAL" // Generate it from https://projectoid.site/services/telegram/bot/register

  HTTP.post({
    url: url,
    body: {
      bot_id: botID,
      access_token: accessToken,
      user_id: userID
    }
  })*/
}



function doTouchOwnLink() {
  var ownText = "<i>⚠️ You can't invite yourself.</i>"

  Api.sendMessage({
    text: ownText,
    parse_mode: "html"
  })
}

function doAttracted(refUser) {
  var userText =
    "<b>👬 You are invited by <a href='tg://user?id=" +
    refUser.telegramid +
    "'>" +
    refUser.first_name +
    "</a></b>"

  Api.sendMessage({
    text: userText,
    parse_mode: "html"
  })

  var refUserText =
    "<b>👬 New user on your invite link : <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</a></b>"

  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: refUserText,
    parse_mode: "html"
  })
}

function doAlreadyAttracted() {
  var alreadyText = "<i>⚠️ You have already started @" + bot.name + "</i>"

  Api.sendMessage({
    text: alreadyText,
    parse_mode: "html"
  })
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.track(trackOptions)

var channel1 = Bot.getProperty("channel1")
var channel2 = Bot.getProperty("channel2")
/*var channel3 = Bot.getProperty("channel3")
var channel4 = Bot.getProperty("channel4")
var channel5 = Bot.getProperty("channel5")
var channel6 = Bot.getProperty("channel6")*/
var photo = "https://ibb.co/mXpSp5j"
var text =
  "<b>💯 In order to start the bot you must have to join our channel(s).\n"+chst+"\n</b>"

if (channel1 === undefined) {
  Bot.runCommand("/mainMenu")
} else if (channel2 === undefined) {
  var buttons = [
    [
      {
        text: "✅ Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
} else {
  var buttons = [
    [{
        text: "✅ Joined",
        callback_data: "/joined"
      }
    ]
  ]

  Api.sendPhoto({
    photo: photo,
    caption: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
}

