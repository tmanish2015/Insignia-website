'use client';
import { useState } from 'react';
import * as Icons from 'lucide-react';

export interface Industry {
  id: string;
  icon: keyof typeof Icons;
  label: string;
  sublabel: string;
  tagNumber: string;
  title: string;
  description: string;
  checklist: string[];
  outcomes: string[];
  mockupTitle: string;
  mockupSubtitle: string;
  stats: { label: string; value: string }[];
  floatingNote: string;
}

export function IndustryShowcase({ industries }: { industries: Industry[] }) {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find(i => i.id === activeId)!;
  const Icon = Icons[active.icon] as React.ComponentType<{ size?: number }>;

  return (
    <div className="grid grid-cols-1 [@media(min-width:1100px)]:grid-cols-[300px_1fr] gap-10 items-start relative z-10">
      <div role="tablist" className="flex [@media(min-width:1100px)]:flex-col flex-row overflow-x-auto gap-1.5 [@media(min-width:1100px)]:sticky top-[170px]">
        {industries.map(ind => {
          const ItemIcon = Icons[ind.icon] as React.ComponentType<{ size?: number }>;
          const isActive = ind.id === activeId;
          return (
            <button
              key={ind.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(ind.id)}
              className={`flex items-center gap-3.5 text-left rounded-sm px-4 py-3.5 border transition-colors flex-shrink-0 [@media(min-width:1100px)]:flex-shrink whitespace-nowrap [@media(min-width:1100px)]:whitespace-normal ${isActive ? 'bg-accent-soft border-accent/50 text-fg' : 'border-transparent text-fg-muted hover:bg-surface2'}`}
            >
              <ItemIcon size={20} />
              <span>
                <b className="block text-sm font-bold">{ind.label}</b>
                <small className="hidden [@media(min-width:1100px)]:block text-xs text-fg-soft font-medium mt-0.5">{ind.sublabel}</small>
              </span>
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="min-h-[520px]">
        <div key={active.id} className="grid grid-cols-1 [@media(min-width:960px)]:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent-dark text-xs font-bold uppercase tracking-wide">{active.tagNumber}</span>
            <h3 className="text-3xl font-extrabold mt-1.5 mb-3.5 max-w-[480px]">{active.title}</h3>
            <p className="text-[15.5px] text-fg-muted max-w-[440px]">{active.description}</p>
            <ul className="flex flex-col gap-3.5 my-6">
              {active.checklist.map(item => (
                <li key={item} className="flex items-center gap-3 text-[14.5px] font-semibold text-fg">
                  <span className="w-5.5 h-5.5 rounded-full bg-green-soft text-green flex items-center justify-center flex-shrink-0"><Icons.Check size={13} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5 flex-wrap">
              {active.outcomes.map(o => <span key={o} className="text-xs font-bold text-accent-dark bg-accent-soft border border-accent/40 rounded-full px-3.5 py-1.5">{o}</span>)}
            </div>
          </div>
          <div className="relative [perspective:1800px]">
            <div className="rounded-md overflow-hidden shadow-lg border border-border bg-surface [transform:rotateX(4deg)_rotateY(-6deg)] transition-transform duration-500">
              <div className="flex items-center gap-2 px-4.5 py-3.5 bg-surface2 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-border" /><span className="w-2.5 h-2.5 rounded-full bg-border" /><span className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <div className="p-7">
                <div className="text-xl font-extrabold text-fg mb-1">{active.mockupTitle}</div>
                <div className="text-[13px] text-fg-soft mb-5">{active.mockupSubtitle}</div>
                <div className="grid grid-cols-2 gap-3.5">
                  {active.stats.map(s => (
                    <div key={s.label} className="bg-surface2 border border-border rounded-sm p-4">
                      <div className="text-xs text-fg-soft font-semibold mb-2">{s.label}</div>
                      <div className="text-xl font-extrabold text-fg">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4.5 -left-6 hidden [@media(min-width:1100px)]:flex items-center gap-2.5 bg-surface2 border border-border rounded-sm shadow-md px-4.5 py-3.5 text-[13px] font-bold text-fg animate-[float_6s_ease-in-out_infinite]">
              <span className="w-2 h-2 rounded-full bg-accent" />{active.floatingNote}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
