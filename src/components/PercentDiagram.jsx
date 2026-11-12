import React from 'react';

/* =========================================================================
   PERCENT DIAGRAM — visuals for percentage increase & decrease.
   • PercentBars  original (100%) bar vs new bar in 10% blocks
   • Chain        value boxes joined by multiplier arrows
   • PriceTags    before / after price tags
   ========================================================================= */

export const C_UP = '#4ade80';
export const C_DOWN = '#f87171';
export const fmtMoney = (v, unit = '$') => {
  if (!Number.isFinite(v)) return '?';
  const r = Math.round(v * 100) / 100;
  const s = Number.isInteger(r) ? r.toLocaleString('en-US') : r.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return unit === '$' ? `$${s}` : `${s}${unit ? ' ' + unit : ''}`;
};

/** Original vs new bar. pct is signed (+25 = increase). */
export function PercentBars({ pct, x = 62, y = 40, w = 230, h = 34, gap = 40, showNew = true, origLabel = '100%', newLabel = null, fs = 13 }) {
  const W = p => (p / 150) * w;
  const blocks = n => [...Array(Math.ceil(n / 10))].map((_, i) => i);
  const np = Math.max(0, 100 + pct);
  return (
    <g>
      <text x={x - 8} y={y + h / 2 + 5} fill="#c4b5fd" fontSize={fs} fontWeight="900" textAnchor="end">Before</text>
      {blocks(100).map(i => (
        <rect key={i} x={x + W(i * 10)} y={y} width={W(10) - 2} height={h} rx="4" fill="#38bdf8" fillOpacity="0.55" stroke="#38bdf8" />
      ))}
      <text x={x + W(100) + 8} y={y + h / 2 + 5} fill="#e2e8f0" fontSize={fs} fontWeight="900">{origLabel}</text>
      {showNew && (
        <g>
          <text x={x - 8} y={y + h + gap + h / 2 + 5} fill="#c4b5fd" fontSize={fs} fontWeight="900" textAnchor="end">After</text>
          {blocks(np).map(i => {
            const from = i * 10, to = Math.min(np, from + 10);
            const extra = from >= 100;
            const lost = pct < 0;
            return <rect key={i} x={x + W(from)} y={y + h + gap} width={Math.max(0, W(to - from) - 2)} height={h} rx="4" fill={extra ? C_UP : '#38bdf8'} fillOpacity={extra ? 0.85 : 0.55} stroke={extra ? C_UP : '#38bdf8'} />;
          })}
          {pct < 0 && <rect x={x + W(np)} y={y + h + gap} width={W(-pct)} height={h} rx="4" fill="none" stroke={C_DOWN} strokeWidth="2" strokeDasharray="5 4" />}
          <text x={x + W(Math.max(100, np)) + 8} y={y + h + gap + h / 2 + 5} fill={pct > 0 ? C_UP : pct < 0 ? C_DOWN : '#e2e8f0'} fontSize={fs} fontWeight="900">{newLabel ?? `${np}%`}</text>
        </g>
      )}
    </g>
  );
}

/**
 * Chain of values. nodes: [{ label, ok }] (label already formatted, '?' if unknown),
 * edges: ['×1.25', ...]
 */
export function Chain({ nodes, edges, y = 80, w = 360, fs = 14 }) {
  const n = nodes.length;
  const bw = Math.min(92, (w - 20) / n - 26);
  const step = (w - 20 - bw) / Math.max(1, n - 1);
  const X = i => 10 + i * step;
  return (
    <g>
      <defs>
        <marker id="chain-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#facc15" /></marker>
      </defs>
      {edges.map((e, i) => (
        <g key={i}>
          <line x1={X(i) + bw + 2} y1={y + 22} x2={X(i + 1) - 4} y2={y + 22} stroke="#facc15" strokeWidth="3" markerEnd="url(#chain-arrow)" />
          <text x={(X(i) + bw + X(i + 1)) / 2} y={y - 6} fill="#facc15" fontSize={fs - 2} fontWeight="900" textAnchor="middle">{e}</text>
        </g>
      ))}
      {nodes.map((nd, i) => (
        <g key={i}>
          <rect x={X(i)} y={y} width={bw} height="44" rx="12" fill={nd.ok ? '#064e3b' : '#14082c'} stroke={nd.ok ? '#4ade80' : nd.label === '?' ? '#f472b6' : '#a78bfa'} strokeWidth="2.5" />
          <text x={X(i) + bw / 2} y={y + 28} fill="#fff" fontSize={nd.label.length > 8 ? fs - 3 : fs} fontWeight="900" textAnchor="middle">{nd.label}</text>
          {nd.caption && <text x={X(i) + bw / 2} y={y + 62} fill="#c4b5fd" fontSize={fs - 3} fontWeight="800" textAnchor="middle">{nd.caption}</text>}
        </g>
      ))}
    </g>
  );
}

/** Before / after price tags. */
export function PriceTags({ before, after, y = 40 }) {
  const tag = (cx, label, val, col) => (
    <g>
      <path d={`M${cx - 60} ${y + 20} L${cx - 40} ${y} L${cx + 60} ${y} L${cx + 60} ${y + 90} L${cx - 40} ${y + 90} L${cx - 60} ${y + 70} Z`} fill="#14082c" stroke={col} strokeWidth="3" />
      <circle cx={cx - 38} cy={y + 45} r="6" fill={col} />
      <text x={cx + 10} y={y + 32} fill="#c4b5fd" fontSize="13" fontWeight="900" textAnchor="middle">{label}</text>
      <text x={cx + 10} y={y + 64} fill="#fff" fontSize="20" fontWeight="900" textAnchor="middle">{val}</text>
    </g>
  );
  return (
    <g>
      {tag(95, 'BEFORE', before, '#38bdf8')}
      <text x="180" y={y + 52} fill="#facc15" fontSize="26" fontWeight="900" textAnchor="middle">→</text>
      {tag(275, 'AFTER', after, '#f472b6')}
    </g>
  );
}

/** Practice diagram wrapper. */
export function PercentDiagram({ diagramData, size = 180 }) {
  if (!diagramData) return null;
  const d = diagramData;
  let body = null;
  if (d.type === 'bars') body = <PercentBars pct={d.pct} y={46} newLabel={d.newLabel} origLabel={d.origLabel} />;
  else if (d.type === 'chain') body = <Chain nodes={d.nodes} edges={d.edges} y={70} />;
  else if (d.type === 'tags') body = <PriceTags before={d.before} after={d.after} y={50} />;
  if (!body) return null;
  return (
    <div className="flex items-center justify-center my-1">
      <svg width={size * 1.8} height={size} viewBox="0 0 360 200" className="max-w-full drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
        {body}
      </svg>
    </div>
  );
}
