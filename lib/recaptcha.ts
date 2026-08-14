export async function verifyRecaptcha(token: string): Promise<number> {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY!, response: token })
  });
  const data = await res.json();
  console.log('recaptcha verify result', {
    success: data.success,
    score: data.score,
    action: data.action,
    hostname: data.hostname,
    challenge_ts: data.challenge_ts,
    'error-codes': data['error-codes']
  });
  return data.success ? (data.score ?? 1) : 0;
}
