interface Stat { label: string; value: string }
interface Props {
  title: string;
  subtitle: string;
  stats: Stat[];
  bars?: number[];
  donut?: boolean;
  tilt?: boolean;
}

export function BrowserMockup({ title, subtitle, stats, bars, donut, tilt = true }: Props) {
  return (
    <div className={tilt ? '[perspective:1800px]' : ''}>
      <div className={`rounded-md overflow-hidden shadow-lg border border-border bg-surface transition-transform duration-500 ${tilt ? '[transform:rotateX(8deg)_rotateY(-10deg)_rotateZ(1deg)] hover:[transform:rotateX(4deg)_rotateY(-5deg)_rotateZ(.5deg)]' : ''}`}>
        <div className="flex items-center gap-2 px-4.5 py-3.5 bg-surface2 border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-border" /><span className="w-2.5 h-2.5 rounded-full bg-border" /><span className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <div className="p-7 bg-surface">
          <div className="text-xl font-extrabold text-fg mb-1">{title}</div>
          <div className="text-[13px] text-fg-soft mb-5">{subtitle}</div>
          <div className={`grid gap-3.5 mb-5`} style={{ gridTemplateColumns: `repeat(${stats.length},1fr)` }}>
            {stats.map(s => (
              <div key={s.label} className="bg-surface2 border border-border rounded-sm p-4">
                <div className="text-xs text-fg-soft font-semibold mb-2">{s.label}</div>
                <div className="text-xl font-extrabold text-fg">{s.value}</div>
              </div>
            ))}
          </div>
          {bars && (
            <div className="bg-surface2 border border-border rounded-sm p-4.5">
              <div className="flex items-end gap-2.5 h-[110px] mt-3">
                {bars.map((h, i) => (
                  <i key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 ? 'var(--tw-color-border, #444)' : 'linear-gradient(180deg, oklch(60% .18 292), oklch(54% .2 350))', opacity: i % 2 ? 0.5 : 0.9 }} />
                ))}
              </div>
            </div>
          )}
          {donut && (
            <div className="bg-surface2 border border-border rounded-sm p-4.5 flex justify-center">
              <div className="w-[110px] h-[110px] rounded-full relative" style={{ background: 'conic-gradient(oklch(60% .18 292) 0 55%, oklch(54% .2 350) 55% 80%, oklch(32% .018 265) 80% 100%)' }}>
                <div className="absolute inset-[27px] bg-surface2 rounded-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
