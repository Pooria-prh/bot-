/*CMD
  command: /invo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

HTTP.post({
  url: "https://pay.ton-rocket.com/tg-invoices",
  headers: {
    "accept": "application/json",
    "Rocket-Pay-Key": "7dc01416ce64b2efa71da2e0a",
    "Content-Type": "application/json"
  },
  body: {
    amount: 1,
    numPayments: 1,
    currency: "not",
    description: "pay to deposit",
    hiddenMessage: "thank you",
    commentsEnabled: false,
    callbackUrl: "https://t.me/ton_rocket",
    payload: "some custom payload I want to see in webhook or when I request invoice",
    expiredIn: 600
  },
  success: "/onInvoice"
});
