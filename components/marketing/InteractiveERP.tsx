'use client';
import { useState } from 'react';
import { BrowserMockup } from './BrowserMockup';

interface Module {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  bars?: number[];
  donut?: boolean;
}

const modules: Module[] = [
  { id: 'inventory', label: 'Inventory', title: 'Stock Overview', subtitle: 'Live stock across every warehouse and location', stats: [{ label: 'SKUs Tracked', value: '1,284' }, { label: 'Low Stock Alerts', value: '6' }], bars: [60, 40, 75, 30, 55, 80] },
  { id: 'sales', label: 'Sales', title: 'Sales Pipeline', subtitle: 'Orders, quotations and fulfillment in one view', stats: [{ label: 'Open Orders', value: '38' }, { label: 'Revenue (MTD)', value: '₹1,59,249' }], bars: [45, 60, 50, 70, 65, 85] },
  { id: 'purchase', label: 'Purchase', title: 'Purchase Orders', subtitle: 'Vendor bills and procurement status', stats: [{ label: 'Pending POs', value: '4' }, { label: 'Vendors', value: '22' }], donut: true },
  { id: 'crm', label: 'CRM', title: 'Customer Pipeline', subtitle: 'Leads, follow-ups and customer health', stats: [{ label: 'Open Pipeline', value: '₹21,45,000' }, { label: 'Open Tickets', value: '3' }], bars: [30, 55, 40, 65, 50, 60] },
  { id: 'accounting', label: 'Accounting', title: 'Financial Position', subtitle: 'Cash, receivables and payables at a glance', stats: [{ label: 'Cash Position', value: '₹9,37,003' }, { label: 'Receivables', value: '₹1,15,321' }], donut: true },
  { id: 'manufacturing', label: 'Manufacturing', title: 'Production Schedule', subtitle: 'Batch progress and machine utilization', stats: [{ label: 'Active Batches', value: '7' }, { label: 'Machine Uptime', value: '92%' }], bars: [70, 55, 80, 45, 60, 75] },
  { id: 'hr', label: 'HR', title: 'Workforce Overview', subtitle: 'Attendance, payroll and shift coverage', stats: [{ label: 'Active Staff', value: '46' }, { label: 'On Leave', value: '3' }], bars: [50, 65, 55, 70, 60, 50] },
  { id: 'reports', label: 'Reports', title: 'Executive Summary', subtitle: 'Cross-module KPIs, generated automatically', stats: [{ label: 'Reports Scheduled', value: '12' }, { label: 'Departments Covered', value: '8' }], donut: true }
];

export function InteractiveERP() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find(m => m.id === activeId)!;

  return (
    <div className="grid grid-cols-1 [@media(min-width:960px)]:grid-cols-[220px_1fr] gap-8 items-start">
      <div role="tablist" className="flex [@media(min-width:960px)]:flex-col flex-row overflow-x-auto gap-1.5">
        {modules.map(m => {
          const isActive = m.id === activeId;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(m.id)}
              className={`text-left rounded-sm px-4 py-3 border transition-colors flex-shrink-0 whitespace-nowrap font-semibold text-sm ${isActive ? 'bg-accent-soft border-accent/50 text-fg' : 'border-transparent text-fg-muted hover:bg-surface2'}`}
            >
              {m.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" key={active.id} className="max-w-[560px]">
        <BrowserMockup title={active.title} subtitle={active.subtitle} stats={active.stats} bars={active.bars} donut={active.donut} tilt={false} />
      </div>
    </div>
  );
}
