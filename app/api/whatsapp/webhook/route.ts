import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';
import { getReply } from '@/lib/chatReplyEngine';

// Meta webhook verification handshake
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');
  if (mode === 'subscribe' && token === process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse('Forbidden', { status: 403 });
}

// Inbound message handler
export async function POST(req: NextRequest) {
  const body = await req.json();
  const entry = body.entry?.[0]?.changes?.[0]?.value;
  const message = entry?.messages?.[0];
  if (!message) return NextResponse.json({ ok: true });

  const from = message.from as string;
  const text = message.text?.body as string;
  const reply = getReply(text);

  const supabase = supabaseServer();
  await supabase.from('whatsapp_conversations').insert({
    session_id: from,
    channel: 'whatsapp_business_api',
    transcript: [{ from: 'user', text }, { from: 'bot', text: reply }]
  });

  await fetch(`https://graph.facebook.com/v20.0/${process.env.WHATSAPP_BUSINESS_PHONE_NUMBER_ID}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_BUSINESS_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ messaging_product: 'whatsapp', to: from, text: { body: reply } })
  });

  return NextResponse.json({ ok: true });
}
