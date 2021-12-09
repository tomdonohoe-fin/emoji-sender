import "reflect-metadata";
const express = require('express')
import { Request, Response } from 'express';
import { sendMessage } from "./service/sendMessage";
import { Message, SendMessageResult } from './interfaces';
import { createDbConnection } from './db/db';

createDbConnection();
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.json());

app.post('/', async function (req: Request, res: Response) {
    if (req && req.body) {
        const { body }: { body: Message} = req;
        const messageResult: SendMessageResult = await sendMessage(body);
        res.send(messageResult);
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});
