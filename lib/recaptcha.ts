export async function verifyRecaptcha(token: string): Promise<number> {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY!, response: token })
  });
  const data = await res.json();
  return data.success ? (data.score ?? 1) : 0;
}
