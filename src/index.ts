const axios = require('axios');
import { Message } from "./interfaces";

const message: Message = {
    from: "Tom",
    message: "let's grab a :beer:",
    to: process.env.MOBILE_NUMBER,
}

// API: https://m3o.com/emoji 

const sendMessage = async (message: Message): Promise<void> => {
    if (!message.to) {
        return;
    }
    
    await axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.M3O_API_TOKEN}`
        },
        url: process.env.M3O_API_URL,
        data: message,
      });

      console.log(`Sent this message to ${message.to}`);
}

sendMessage(message);
