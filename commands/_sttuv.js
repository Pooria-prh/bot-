/*CMD
  command: /sttuv
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  var adminText ="<b>📊 Total users :</b> <code>" +
    status.value() +
    "</code>"

  Api.sendMessage({
    text: adminText,
    parse_mode: "html"
  })
