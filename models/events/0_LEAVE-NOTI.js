module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "SaGor 🙂",
  description: "left notification",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
  const { threadID } = event;
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "নিজেই চালিত 😐👈" : "অ্যাডমিন রাগান্বিত 😐👈";
  (typeof data.customLeave == "undefined") ? msg = "┏━━━━━┓\n     SAGOR                    ✧═══•❁😎❁•═══✧\n┗━━━━━┛\n\n\n গ্রুপ থেকে লিভ নিয়ে ভুল করলে 🦥💨\nNAME  𒁍  {name}\nREJAN  𒁍 {type} 🤐✌️\n◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆━◆\n\nবাই বাই পাগলা মানুষ 🥹 {session}\n{time} ♥️♥️" : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

  var link = [  
"https://i.imgur.com/ifziAe7.jpeg",
"https://i.imgur.com/ifziAe7.jpeg",
"https://i.imgur.com/ifziAe7.jpeg",
"https://i.imgur.com/ifziAe7.jpeg",
  ];
  var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/SAGOR/leiamnashO.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/SAGOR/leiamnashO.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/SAGOR/leiamnashO.jpg")).on("close", () => callback());
                                                                  }
