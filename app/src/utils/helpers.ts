import * as R from 'ramda';
import { HistoryDetail } from '@features/Sidebar/types';
import { MessageType } from '@features/Chat/types';

export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
  return (Object.keys(target) as K[]).reduce(
    (res, key) => {
      if (!omitKeys.includes(key)) {
        res[key] = target[key];
      }
      return res;
    },
    {} as any
  );
}

export function sortByDate(details: Array<HistoryDetail>) {
  return details.sort((a, b) => b.carriedOut - a.carriedOut);
};

export function toSpaced(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function convertUnixTime(UNIXtimestamp: number, locale: string = 'ru-RU') {
  const a = new Date(UNIXtimestamp * 1000);
  return a.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Debounce
 *
 * @param immediate {Boolean} If true run `fn` at the start of the timeout
 * @param timeMs {Number} Debounce timeout
 * @param fn {Function} Function to debounce
 *
 * @return {Number} timeout
 *
 */

const debounce_ = R.curry((immediate, timeMs, fn) => () => {
  let timeout: any;

  return (...args: any) => {
    const later = () => {
      timeout = null;

      if (!immediate) {
        R.apply(fn, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, timeMs);

    if (callNow) {
      R.apply(fn, args);
    }

    return timeout;
  };
});

export const debounce = debounce_(false);

export const sendToSocket = R.curry((socket, message) => {
  return socket.emit('MESSAGE_TO_SERVER', message);
});

export const detectStage = (messages: MessageType[]) => {
  const lastMessage = messages.filter(({ isClient }: MessageType) => isClient).slice(-1)[0];
  if (lastMessage) {
    switch (lastMessage.message) {
      case 'Привет, ребята, снова проблемка, есть время?':
        return 1;
      case 'То, что надо, спасибо!':
        return 3;
      default:
        return 2;
    }
  }
  return 1;
};
