const model = global.app.model;
const filter = require('lodash/filter');

module.exports.findConversation = users =>
    model.Conversation.findOne({users: {$all: users}}).exec().then(
        conversation => {
            if (conversation) {
                return conversation;
            }
            conversation = new model.Conversation({users});
            return conversation.save();
        }
    );

module.exports.sendMessage = (conversation, message) => {
    message.conversation = conversation._id;
    message = new model.Message(message);
    conversation.lastMessage = message.text.substr(0, 100);
    conversation.unreadBy = filter(conversation.users, user => user != message.user);
    return Promise.all([
        conversation.save(),
        message.save(),
    ]).then(() => message);
};
