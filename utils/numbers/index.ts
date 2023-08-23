const GERMAN_FORMAT = 'de-DE';

export const showWithPoints = (value: number = 0): string => (new Intl.NumberFormat(GERMAN_FORMAT).format(value));

export const roundToTwoDecimals = (value: number = 0) => parseFloat(value.toFixed(2));
