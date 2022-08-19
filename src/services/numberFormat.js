const formatThaiCurrency = (number, currency = 'THB') => {
  return   new Intl.NumberFormat('en-IN', {
        currency,
        style: 'currency',
        currencyDisplay: 'narrowSymbol',
    }).format(number)
}
export {formatThaiCurrency};