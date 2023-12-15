export const pluralize = (count: Number, noun: String, suffix: String = 's'): String =>
 `${count} ${noun}${count !== 1 ? suffix : ''}`;