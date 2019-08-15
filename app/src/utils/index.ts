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

export function toSpaced(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export function convertUnixTime(UNIXtimestamp: number, locale: string = 'ru-RU') {
  const a = new Date(UNIXtimestamp * 1000);
  return a.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric'});
};

// export const prepareOperationType = (operationType: string) => {
//   switch(operationType) {
//     case('')
//   }
// }