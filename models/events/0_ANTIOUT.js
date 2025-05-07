module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "SaGor 🍒🐥",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "স্ব বিচ্ছেদ" : "কেউ কি এভাবে পিঠে পেটায়??";
 if (type == "স্ব বিচ্ছেদ") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সাগর বট থাকতে পালাবি কেমনে 🥺 ${name} Group Mai :( `, event.threadID)
   } else api.sendMessage(`পালানোর কোন সুযোগ নেই, ${name} বাবু, দেখো আমি তোমাকে আবার যোগ করেছি।`, event.threadID);
  })
 }
}
