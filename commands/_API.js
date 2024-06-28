/*CMD
  command: /API
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your api key
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty("apik", message, "integer")
var text =
    "API key set to "+message+""

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })
