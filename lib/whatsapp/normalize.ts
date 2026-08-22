export function normalizeIndianNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  return digits.replace(/^0+/, '');
}
