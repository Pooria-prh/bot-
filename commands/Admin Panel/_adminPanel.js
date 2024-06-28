/*CMD
  command: /adminPanel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var adminName = user.first_name
  var text =
    "<b>👋 Hello " +
    adminName +
    ", welcome to the admin panel of " +
    botLink +
    ".</b>"
  var currency = Bot.getProperty("currency")
  var bonus = Bot.getProperty("bonus")
  var perRefer = Bot.getProperty("perRefer")
  var minimumWithdrawal = Bot.getProperty("minimumWithdrawal")
  var maximumWithdrawal = Bot.getProperty("maximumWithdrawal")
  var withdrawalStatus = Bot.getProperty("withdrawalStatus")
  var maintenanceStatus = Bot.getProperty("maintenanceStatus")
  var alertsChannel = Bot.getProperty("alertsChannel")
  var buttons = [
    [
      {
        text: "➕ Add balance",
        callback_data: "/addBalance"
      },
      {
        text: "➖ Remove balance",
        callback_data: "/removeBalance"
      }
    ],
    [
      {
        text: "🚫 Ban user",
        callback_data: "/banUser"
      },
      {
        text: "✔️ Unban user",
        callback_data: "/unbanUser"
      }
    ],
    [
      {
        text: "🏘️ Set channel(s)",
        callback_data: "/setChannels"
      },
      {
        text: "Set @xrocket API KEY",
        callback_data: "/API"
      }
    ],
    [
      {
        text: "💬 Chat with user",
        callback_data: "/chatWithUser"
      }
    ],
    [
      {
        text: "💲 Set currency : " + currency,
        callback_data: "/setCurrency"
      }
    ],
    [
      {
        text: "🧑‍🤝‍🧑 Set per refer : " + perRefer + " " + currency,
        callback_data: "/setPerRefer"
      }
    ],
    [
      {
        text:
          "💸 Set minimum withdrawal : " + minimumWithdrawal + " " + currency,
        callback_data: "/setMinimumWithdrawal"
      }
    ],
    [
      {
        text:
          "💸 Set maximum withdrawal : " + maximumWithdrawal + " " + currency,
        callback_data: "/setMaximumWithdrawal"
      }
    ],
    [
      {
        text: "🏧 Set withdrawal status : " + withdrawalStatus,
        callback_data: "/setWithdrawalStatus"
      }
    ],
    [
      {
        text: "🛠️ Set maintenance status : " + maintenanceStatus,
        callback_data: "/setMaintenanceStatus"
      }
    
    ],
    [
      {
        text: "Channels in start message : ",
        callback_data: "/chst"
      },{
        text: "🔴 set Alerts channel : ",
        callback_data: "/setAlertsChannel"
      }
    
    ],
    [
      {
        text: "statistics : ",
        callback_data: "/sttuv"
      }
    
    ]
  ]

  Api.sendMessage({
    text: text,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "html"
  })
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

