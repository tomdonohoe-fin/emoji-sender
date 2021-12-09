import { createConnection } from "typeorm";
import { getConnection } from "typeorm";
import { Message } from '../entities/message.entity';
import { Message as IMessage } from '../interfaces';

export const createDbConnection = async () => await createConnection();

export const insertMessage = async (message: IMessage) => {
    const connection = getConnection()
    const messageEntity: Message = new Message();
    messageEntity.messgae = message.message;
    messageEntity.from = message.from;
    await connection.manager.save(messageEntity);
};
