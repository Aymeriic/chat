import React from "react";
import { Virtuoso } from "react-virtuoso";

import Message from "./Message";
import MessageType from "../../types/Message";

type messagesType = {
  data: MessageType[],
  firstItemIndex: number,
  initialItemCount: number,
  prependItems: ((index: number) => void) | undefined,
};

export const Messages = ({ data, firstItemIndex, initialItemCount, prependItems }: messagesType): JSX.Element => (
  <Virtuoso
    style={{ height: 400 }}
    followOutput="auto"
    firstItemIndex={firstItemIndex}
    initialTopMostItemIndex={initialItemCount - 1}
    data={data}
    startReached={prependItems}
    itemContent={(index, message) => {
      return <Message message={message} />;
    }}
  />
);

export default Messages;
