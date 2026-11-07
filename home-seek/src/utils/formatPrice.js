const priceFormat = new Intl.NumberFormat("sr-Latn-RS", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatEuro(amount) {
  return priceFormat.format(amount);
}

export function formatListingPrice({ price, deal }) {
  return formatEuro(price) + (deal === "Iznajmljivanje" ? " / mes." : "");
}
