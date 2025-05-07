module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "SaGor",
	description: "THIS BOT WAS MADE BY SAGOR",
	commandCategory: "ALL OUT OF THE GROUP BOT",
	usages: "PREFIX",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["61573038178753","",""];
             if (!permission.includes(event.senderID))
             return api.sendMessage("সাগর বস চাইলেই সকল গুরুপ থেকে বেরিয়ে দিতে পারেন 🙂✌️", event.threadID, event.messageID);
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage('সাগর বস সমস্ত দল ছেড়ে চলে যায় 🙂✌️', event.threadID);
	});
  }
