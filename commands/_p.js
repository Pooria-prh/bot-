/*CMD
  command: /p
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

HTTP.get({
  url: "https://pay.ton-rocket.com/tg-invoices/699228",
  headers: {
    'accept': 'application/json',
    'Rocket-Pay-Key': '7dc01416ce64b2efa71da2e0a'
  },
  success: "/po"
});
