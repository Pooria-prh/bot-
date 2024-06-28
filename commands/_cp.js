/*CMD
  command: /cp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var verify = User.getProperty("verify");

if (verify) {
    Bot.runCommand("/mainMenu");
} else {
    var url2 = Libs.Webhooks.getUrlFor({
        command: "/onWebhook",
        user_id: user.id
    });

    var webPage = "https://api.jobians.top/captcha/verify?webhookUrl=" + encodeURIComponent(url2);

    var key = [[{text: "Complete the captcha", web_app: { url: webPage } }]]
Api.sendMessage({
  text: "Complete a captcha, to prove that you are human",
  reply_markup: { inline_keyboard: key }
})}
