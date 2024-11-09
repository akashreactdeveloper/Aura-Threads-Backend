const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfII1kvZZKYlIlCtou9TfHNblg0X9ZhSNmdzGreou0oNAYQaGvpQYGERirueVljhSTKMaAnjtcT3vIHT",
  client_secret: "EARrVGrcmA8NZe40foWG0rFkkZ99VkXo_PHW6vtV4KyxErg-ldARTeQhB08L5WE8mMJmR7_WTznZ-qr9",
});

module.exports = paypal;
