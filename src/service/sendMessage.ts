import axios, { AxiosError } from 'axios';
import { Message, SendMessageResult } from "../interfaces";
import { insertMessage } from '../db/db'

export const sendMessage = async (message: Message): Promise<SendMessageResult> => {
    try {
        const res = await axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.M3O_API_TOKEN}`
            },
            url: process.env.M3O_API_URL,
            data: message,
          });

          if (res.data.success) {
              console.log(`Sent this message to ${message.to}`);
              await insertMessage(message);
              return {
                isSuccessful: true,
                messageSent: message.message,
              };
          };
    } catch (error) {
        const err = error as AxiosError;
        return {
            isSuccessful: false,
            errorMessage: err.response?.data,
          };
    }

    return {
        isSuccessful: false,
      };
};
