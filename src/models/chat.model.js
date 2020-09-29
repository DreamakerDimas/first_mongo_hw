const mongoose = require('mongoose');
const connection = require('./../db');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  chatName: {
    type: String,
    unique: true,
    minlength: 6,
  },
  messages: [
    {
      text: {
        type: String,
        minlength: 1,
      },
    },
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
});

const Chat = connection.model('Chat', chatSchema);

module.exports = Chat;
