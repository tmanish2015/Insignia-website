const WA_DEFAULTS = /*EDITMODE-BEGIN*/{
"enabled": true,
"accent": "#22c55e",
"position": "right",
"greeting": "Hi! I'm Insignia's assistant. Ask me about ERP, AI automation or pricing — I'm here 24/7.",
"autoOpenDelay": 4
}/*EDITMODE-END*/;

function botReply(msg){
const m=msg.toLowerCase();
if(m.includes('price')||m.includes('cost')||m.includes('pricing'))return "Every plan is scoped to your modules and users, so pricing is a custom quote. Want me to connect you with our team?";
if(m.includes('demo'))return "I can get a free demo booked for you — head to the Contact page and we'll follow up within a business day.";
if(m.includes('erp'))return "Our ERP covers Sales, Inventory, HRMS, Finance and Manufacturing in one system. Want details on a specific module?";
if(m.includes('ai'))return "Insignia's AI layer handles document reading, WhatsApp automation, voice AI and predictive analytics. What would you like automated?";
if(m.includes('hi')||m.includes('hello')||m.includes('hey'))return "Hello! Happy to help — are you looking into ERP, AI automation, or digital marketing?";
return "Got it — one of our specialists can go deeper on that. Want to book a free consultation?";
}

function WhatsAppWidget(){
const [t,setTweak]=useTweaks(WA_DEFAULTS);
const [open,setOpen]=React.useState(false);
const [typing,setTyping]=React.useState(false);
const [msgs,setMsgs]=React.useState([{from:'bot',text:t.greeting}]);
const [input,setInput]=React.useState('');
const boxRef=React.useRef(null);
const autoOpened=React.useRef(false);

React.useEffect(()=>{setMsgs(m=>[{from:'bot',text:t.greeting},...m.slice(1)])},[t.greeting]);

React.useEffect(()=>{
if(!t.enabled||autoOpened.current||t.autoOpenDelay<=0)return;
const id=setTimeout(()=>{setOpen(true);autoOpened.current=true},t.autoOpenDelay*1000);
return ()=>clearTimeout(id);
},[t.enabled,t.autoOpenDelay]);

React.useEffect(()=>{if(boxRef.current)boxRef.current.scrollTop=boxRef.current.scrollHeight},[msgs,typing]);

if(!t.enabled)return null;

function send(){
const val=input.trim();
if(!val)return;
setMsgs(m=>[...m,{from:'user',text:val}]);
setInput('');
setTyping(true);
setTimeout(()=>{setTyping(false);setMsgs(m=>[...m,{from:'bot',text:botReply(val)}])},1000+Math.random()*600);
}

const side=t.position==='left'?{left:24}:{right:24};
const panelSide=t.position==='left'?{left:24}:{right:24};

return (
<div>
<button onClick={()=>setOpen(o=>!o)} style={{position:'fixed',bottom:24,...side,width:60,height:60,borderRadius:'50%',background:t.accent,border:'none',boxShadow:'0 12px 30px -8px rgba(0,0,0,.35)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',zIndex:998}} aria-label="Chat with us">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 3 6.9 3 11.5c0 2.2 1 4.2 2.6 5.7L5 21l4-1.3c1 .3 2 .5 3 .5 5 0 9-3.9 9-8.7S17 3 12 3z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="8.7" cy="11.5" r="1" fill="#fff"/><circle cx="12" cy="11.5" r="1" fill="#fff"/><circle cx="15.3" cy="11.5" r="1" fill="#fff"/></svg>
</button>
{open&&(
<div style={{position:'fixed',bottom:96,...panelSide,width:340,maxWidth:'calc(100vw - 48px)',background:'#13151d',borderRadius:20,boxShadow:'0 30px 80px -24px rgba(0,0,0,.7)',border:'1px solid #262a38',overflow:'hidden',zIndex:998,display:'flex',flexDirection:'column',fontFamily:'Inter,system-ui,sans-serif'}}>
<div style={{background:t.accent,padding:'16px 18px',color:'#fff',display:'flex',alignItems:'center',gap:10}}>
<div style={{width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,.25)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>IN</div>
<div><div style={{fontWeight:700,fontSize:14}}>Insignia Assistant</div><div style={{fontSize:12,opacity:.85}}>Online 24/7</div></div>
</div>
<div ref={boxRef} style={{flex:1,padding:16,display:'flex',flexDirection:'column',gap:10,maxHeight:320,overflowY:'auto',background:'#0e0f16'}}>
{msgs.map((m,i)=>(
<div key={i} style={{alignSelf:m.from==='bot'?'flex-start':'flex-end',background:m.from==='bot'?'#1a1d27':t.accent,color:m.from==='bot'?'#e8e9ee':'#fff',padding:'10px 14px',borderRadius:14,fontSize:13.5,lineHeight:1.5,maxWidth:'85%',border:m.from==='bot'?'1px solid #262a38':'none'}}>{m.text}</div>
))}
{typing&&<div style={{alignSelf:'flex-start',fontSize:12,color:'#8a8fa0',fontStyle:'italic'}}>Assistant is typing…</div>}
</div>
<div style={{display:'flex',gap:8,padding:12,borderTop:'1px solid #262a38'}}>
<input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')send()}} placeholder="Type a message…" style={{flex:1,border:'1px solid #262a38',borderRadius:999,padding:'10px 14px',fontSize:13.5,fontFamily:'inherit',outline:'none',background:'#1a1d27',color:'#f5f6f8'}}/>
<button onClick={send} style={{width:38,height:38,borderRadius:'50%',border:'none',background:t.accent,color:'#fff',cursor:'pointer',fontSize:16}}>➤</button>
</div>
</div>
)}
<TweaksPanel>
<TweakSection label="WhatsApp Bot"/>
<TweakToggle label="Enable widget" value={t.enabled} onChange={v=>setTweak('enabled',v)}/>
<TweakColor label="Accent color" value={t.accent} options={['#22c55e','#18181b','#2A6FDB','#7A5AE0']} onChange={v=>setTweak('accent',v)}/>
<TweakRadio label="Position" value={t.position} options={['left','right']} onChange={v=>setTweak('position',v)}/>
<TweakSlider label="Auto-open delay" value={t.autoOpenDelay} min={0} max={15} step={1} unit="s" onChange={v=>setTweak('autoOpenDelay',v)}/>
<TweakText label="Greeting message" value={t.greeting} onChange={v=>setTweak('greeting',v)}/>
</TweaksPanel>
</div>
);
}

ReactDOM.createRoot(document.getElementById('wa-root')).render(<WhatsAppWidget/>);
