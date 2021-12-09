export interface Message {
    from: string;
    message: string;
    to: string | undefined;
}

export interface SendMessageResult {
    isSuccessful: boolean;
    messageSent?: string;
    messageSentTo?: string;
    errorMessage?: string;
}