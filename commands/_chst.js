/*CMD
  command: /chst
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty("chst", message, "integer")
var text =
    " set to "+message+""

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })
