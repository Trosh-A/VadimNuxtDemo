// 2,1 млрд это около максимальный int который может принять C#
/**
 * Случайное целое число от min до max включительно
 * @param min минимальное значение (по умолчанию 1)
 * @param max максимальное значение (по умолчанию 2_100_000_000, чтобы точно помещалось в c# int)
 * @returns случайной значение от min до max включительно
 */
export const randomInteger = (min = 1, max = 2_100_000_000) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const randomFromItems = <T>(...items: T[]) => items[Math.floor((Math.random() * items.length))];
