import React from "react";

import MessageType from "../../types/Message";

export const Message = ({ message }: { message: MessageType }): JSX.Element => (
    <div style={{ display: 'flex', textAlign:'left', backgroundColor: message.bgColor, padding: '1rem 0.5rem' }}>
        <div style={{ flex: 1, padding: 5, color: 'orange' }}>{message?.date}</div>
        <div style={{ flex: 8, padding: 5, color: 'green' }}>
            {message?.value}
        </div>
    </div>
);

export default Message;
