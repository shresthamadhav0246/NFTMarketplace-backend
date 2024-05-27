const Chat = require("../models/Chat");

// Fetch chat messages by tokenId
exports.getChat = async (req, res) => {
  const { tokenId } = req.params;
  try {
    const chat = await Chat.findOne({ tokenId });
    if (chat) {
      res.send(chat.messages);
    } else {
      res.status(404).send({ message: "No chat found for this tokenId" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error fetching chat messages", error });
  }
};

// Post a new message
exports.chat = async (req, res) => {
  const { tokenId } = req.params;
  const { walletAddress, message } = req.body;

  try {
    let chat = await Chat.findOne({ tokenId });

    if (!chat) {
      chat = new Chat({ tokenId, messages: [] });
    }

    chat.messages.push({ walletAddress, message });
    await chat.save();

    res.status(201).send(chat.messages);
  } catch (error) {
    res.status(500).send({ message: "Error posting message", error });
  }
};
