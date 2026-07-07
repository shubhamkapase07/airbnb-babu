const inr = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

/** Format a number as an Indian-Rupee amount, e.g. 28499 -> "₹28,499" */
export function formatPrice(amount: number): string {
  return `₹${inr.format(amount)}`;
}
