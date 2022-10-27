import faker from 'faker';
import Message from '../types/Message';

const generated: Array<Message> = [];

export const getMessage = (index = 0, value?: string, date?: string): Message => {
  if (!generated[index]) {
    generated[index] = {
      id: index + 1,
      value: value || faker.lorem.paragraphs(1),
      date: date || new Date().toLocaleString('fr-FR'),
      bgColor: index % 2 ? 'rgb(235 234 234)' : 'whitesmoke',
    };
  }

  return generated[index];
}

export function generateMessages(length: number, startIndex = 0): Array<Message> {
  return Array.from({ length }).map((_, i) => getMessage(i + startIndex))
}
