'use client';
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { getReply } from '@/lib/chatReplyEngine';

interface Msg { from: 'bot' | 'user'; text: string }

const GREETING = "Hi! I'm Insignia's assistant. Ask me about ERP, AI automation or pricing — I'm here 24/7.";

export function WhatsAppWidget({ accent = '#22c55e', position = 'right', autoOpenDelay = 4 }: { accent?: string; position?: 'left' | 'right'; autoOpenDelay?: number }) {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');
  const boxRef = useRef<HTMLDivElement>(null);
  const autoOpened = useRef(false);

  useEffect(() => {
    if (autoOpened.current || autoOpenDelay <= 0) return;
    const id = setTimeout(() => { setOpen(true); autoOpened.current = true; }, autoOpenDelay * 1000);
    return () => clearTimeout(id);
  }, [autoOpenDelay]);

  useEffect(() => { if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight; }, [msgs, typing]);

  function send() {
    const val = input.trim();
    if (!val) return;
    setMsgs(m => [...m, { from: 'user', text: val }]);
    setInput('');
    setTyping(true);
    const lastBot = [...msgs].reverse().find(m => m.from === 'bot');
    const lastWasBooking = !!lastBot && /consultation|connect you with our team/i.test(lastBot.text);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { from: 'bot', text: getReply(val, { lastWasBooking }) }]);
    }, 1000 + Math.random() * 600);
  }

  const side = position === 'left' ? 'left-6' : 'right-6';

  return (
    <div>
      <button onClick={() => setOpen(o => !o)} aria-label="Chat with us"
        className={`fixed bottom-6 ${side} w-15 h-15 rounded-full border-none shadow-md cursor-pointer flex items-center justify-center z-[998]`}
        style={{ background: accent }}>
        <MessageCircle color="#fff" size={28} />
      </button>
      {open && (
        <div className={`fixed bottom-24 ${side} w-[340px] max-w-[calc(100vw-48px)] bg-[#13151d] rounded-[20px] shadow-lg border border-[#262a38] overflow-hidden z-[998] flex flex-col font-sans`}>
          <div className="px-4.5 py-4 text-white flex items-center gap-2.5" style={{ background: accent }}>
            <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center font-extrabold">IN</div>
            <div><div className="font-bold text-sm">Insignia Assistant</div><div className="text-xs opacity-85">Online 24/7</div></div>
          </div>
          <div ref={boxRef} className="flex-1 p-4 flex flex-col gap-2.5 max-h-[320px] overflow-y-auto bg-[#0e0f16]">
            {msgs.map((m, i) => (
              <div key={i} className={`px-3.5 py-2.5 rounded-[14px] text-[13.5px] leading-relaxed max-w-[85%] ${m.from === 'bot' ? 'self-start bg-[#1a1d27] text-[#e8e9ee] border border-[#262a38]' : 'self-end text-white'}`} style={m.from === 'user' ? { background: accent } : {}}>{m.text}</div>
            ))}
            {typing && <div className="self-start text-xs text-[#8a8fa0] italic">Assistant is typing…</div>}
          </div>
          <div className="flex gap-2 p-3 border-t border-[#262a38]">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') send(); }} placeholder="Type a message…"
              className="flex-1 border border-[#262a38] rounded-full px-3.5 py-2.5 text-[13.5px] outline-none bg-[#1a1d27] text-[#f5f6f8]" />
            <button onClick={send} className="w-9.5 h-9.5 rounded-full border-none text-white cursor-pointer flex items-center justify-center" style={{ background: accent }}><Send size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
}
