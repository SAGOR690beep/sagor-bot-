const fs = require("fs");
module.exports.config = {
  name: "rose",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SaGor 🍒", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5,  
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("rose") ||
     react.includes("Rose") || react.includes("ROSE") || react.includes("RosE") ||
react.includes("rose") ||
react.includes("🌹")) {
    var msg = {
        body: `🌹এই নেও বেবি তোমার জন্য গোলাপ 🌹`,attachment: fs.createReadStream(__dirname + `/SAGOR/ROSE.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
