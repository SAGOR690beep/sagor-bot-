const fs = require("fs");
module.exports.config = {
  name: "sagor aa gya",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Sagor 🍒", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Sagor")==0 || event.body.indexOf("sagor")==0 || event.body.indexOf("সাগর")==0 || event.body.indexOf("SAGOR")==0) {
    var msg = {
        body: "আমাকে সাগর বস তৈরি করেছেন 😐",
        attachment: fs.createReadStream(__dirname + `/SAGOR/dk.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
