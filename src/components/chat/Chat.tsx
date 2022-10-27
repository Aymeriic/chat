import React, { useCallback, useState, Suspense } from "react";

import Spinner from "../spinner/Spinner";
import Input from "../input/Input";
import MessageType from "../../types/Message";
import { generateMessages, getMessage } from '../../data/data';

import './chat.css';

const Messages = React.lazy(() => import('../messages/Messages'));

const START_INDEX: number = 100000;
const INITIAL_ITEM_COUNT: number = 20;
const MESSAGES_TO_PREPEND: number = 20;

export const Chat = (): JSX.Element => {
    const [firstItemIndex, setFirstItemIndex] = useState<number>(START_INDEX);
    const [messages, setMessages] = useState<MessageType[]>(() => generateMessages(INITIAL_ITEM_COUNT, START_INDEX));

    const handleSubmit = (value: string) => {
        setMessages((messages) => [...messages, getMessage(messages[messages.length - 1].id, value, new Date().toLocaleString("fr-FR"))]);
    }

    const prependItems = useCallback(() => {
        const nextFirstItemIndex = firstItemIndex - MESSAGES_TO_PREPEND;

        setTimeout(() => {
            setFirstItemIndex(() => nextFirstItemIndex);
            setMessages(() => [...generateMessages(MESSAGES_TO_PREPEND, firstItemIndex), ...messages]);
        }, 500)

        return false;
    }, [firstItemIndex, messages, setMessages]);

    return (
        <div className="chat">
            <div className="messages">
                <Suspense fallback={<Spinner />}>
                    <Messages
                        prependItems={prependItems}
                        firstItemIndex={firstItemIndex}
                        initialItemCount={INITIAL_ITEM_COUNT}
                        data={messages}
                    />
                </Suspense>
            </div>
            <Input type="text" handleSubmit={handleSubmit} />
        </div>
    );
};

export default Chat;
