/**
 * Currency formatter to format for 0dp
 */
export const moneyFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
  minimumFractionDigits: 0,
}).format;
