import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import {
  simulateStationIntro,
  simulateActivityIntro,
  simulateActivityHint,
  feedbackNarration
} from '../utils/narration.js';
import { PercentBars, Chain, PriceTags, fmtMoney, C_UP, C_DOWN } from '../components/PercentDiagram.jsx';

/* =========================================================================
   SIMULATION STATIONS — Percentage Increase & Decrease (Grade 8)
   Station 1 · Percent Slider  → SEE how a % change grows or shrinks a bar
   Station 2 · Price Tracker   → TRY it: find the change and % change
   Station 3 · Change Chains   → APPLY: successive, reverse & compound changes
   ========================================================================= */

const parseVal = str => {
  const s = String(str ?? '').replace(/[$,%\s]/g, '');
  return s === '' ? NaN : Number(s);
};
const near = (str, want, tol = 0.006) => { const v = parseVal(str); return Number.isFinite(v) && Math.abs(v - want) <= tol; };
const fmtN = v => (Number.isInteger(v) ? v.toLocaleString('en-US') : String(+v.toFixed(4)));

/* ------------------------------------------------------------------------
   STATION DATA
   ------------------------------------------------------------------------ */
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: The Price Rise",
      desc: "Leo's $80 jacket goes up in price by 25%. Set the slider to show the change, then find the multiplier and the new price.",
      icon: "🧥",
      orig: 80, unit: '$', pct: 25,
      hint: "An increase of 25% means 100% + 25% = 125%, so the multiplier is 1.25. Then 80 × 1.25."
    },
    {
      id: 2,
      title: "Activity 2: Sale Day",
      desc: "A $60 pair of trainers is reduced by 15% in a sale. Set the slider, then find the multiplier and the sale price.",
      icon: "👟",
      orig: 60, unit: '$', pct: -15,
      hint: "A decrease of 15% leaves 100% − 15% = 85%, so the multiplier is 0.85. Then 60 × 0.85."
    },
    {
      id: 3,
      title: "Activity 3: Phone Battery",
      desc: "A phone battery holds 4,500 mAh when new. After two years it has lost 40% of its capacity. Set the slider, then find the multiplier and the new capacity.",
      icon: "🔋",
      orig: 4500, unit: 'mAh', pct: -40,
      hint: "Losing 40% leaves 60%, so the multiplier is 0.6. Then 4,500 × 0.6."
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Game Console",
      desc: "A game console used to cost $250. Now it costs $200. Did the price go up or down, and by what percentage?",
      icon: "🎮",
      before: 250, after: 200, unit: '$',
      hint: "Change = 250 − 200 = $50. Percentage change = 50 ÷ 250 (the ORIGINAL) × 100."
    },
    {
      id: 2,
      title: "Activity 2: Concert Tickets",
      desc: "Last year a concert ticket cost $40. This year it costs $46. Find the change and the percentage change.",
      icon: "🎫",
      before: 40, after: 46, unit: '$',
      hint: "Change = 46 − 40 = $6. Percentage change = 6 ÷ 40 × 100."
    },
    {
      id: 3,
      title: "Activity 3: Growing Town",
      desc: "A town had 12,000 people. Five years later it has 13,500 people. Find the change and the percentage change.",
      icon: "🏘️",
      before: 12000, after: 13500, unit: 'people',
      hint: "Change = 1,500 people. Percentage change = 1,500 ÷ 12,000 × 100."
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Leo's Jacket Mystery",
      desc: "The $80 jacket rises by 25%, then a sale takes 25% off the NEW price. Follow the chain and find the overall percentage change.",
      icon: "🧥",
      nodes: [{ given: 80, caption: 'start' }, { key: 'n1', answer: 100, caption: 'after rise' }, { key: 'n2', answer: 75, caption: 'after sale' }],
      edges: ['+25% (×1.25)', '−25% (×0.75)'],
      fields: [
        { key: 'n1', label: 'Price after the rise ($)' },
        { key: 'n2', label: 'Price after the sale ($)' },
        { key: 'pct', label: 'Overall % DECREASE', answer: 6.25 }
      ],
      done: "🎉 $80 → $100 → $75. Overall × 0.9375, a 6.25% decrease — not back to $80!",
      hint: "80 × 1.25 = 100, then 100 × 0.75 = 75. The drop of $5 compared with the ORIGINAL $80 is 5 ÷ 80 × 100."
    },
    {
      id: 2,
      title: "Activity 2: Working Backwards",
      desc: "Mia buys a shirt for $68 in a '15% off' sale. What was the original price? Run the chain backwards!",
      icon: "👕",
      nodes: [{ key: 'orig', answer: 80, caption: 'original' }, { given: 68, caption: 'sale price' }],
      edges: ['−15% (×0.85)'],
      fields: [
        { key: 'mult', label: 'Multiplier for 15% off', answer: 0.85 },
        { key: 'orig', label: 'Original price ($)' },
        { key: 'saved', label: 'Money saved ($)', answer: 12 }
      ],
      done: "🎉 $68 ÷ 0.85 = $80, so Mia saved $12. (Adding 15% of $68 would give $78.20 — wrong!)",
      hint: "Original × 0.85 = 68, so original = 68 ÷ 0.85. Saved = original − 68."
    },
    {
      id: 3,
      title: "Activity 3: Savings Account",
      desc: "Leo puts $500 in a savings account that grows by 4% every year. Follow the chain for 3 years (round to the nearest cent).",
      icon: "🏦",
      nodes: [{ given: 500, caption: 'start' }, { key: 'y1', answer: 520, caption: 'year 1' }, { key: 'y2', answer: 540.8, caption: 'year 2' }, { key: 'y3', answer: 562.432, caption: 'year 3' }],
      edges: ['×1.04', '×1.04', '×1.04'],
      fields: [
        { key: 'y1', label: 'After year 1 ($)' },
        { key: 'y2', label: 'After year 2 ($)' },
        { key: 'y3', label: 'After year 3 ($)' },
        { key: 'int', label: 'Total interest earned ($)', answer: 62.432 }
      ],
      done: "🎉 $500 × 1.04³ = $562.43 — that's $62.43 of interest, more than 3 × $20!",
      hint: "Multiply by 1.04 each year: 500 × 1.04 = 520, 520 × 1.04 = 540.80, and so on."
    }
  ]
};

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Station 1
  const [dir, setDir] = useState(null);
  const [pct, setPct] = useState(0);
  const [ans1, setAns1] = useState({});
  const [ok1, setOk1] = useState({});

  // Station 2
  const [dir2, setDir2] = useState(null);
  const [ans2, setAns2] = useState({});
  const [ok2, setOk2] = useState({});
  const [solved2, setSolved2] = useState(false);

  // Station 3
  const [ans3, setAns3] = useState({});
  const [ok3, setOk3] = useState({});

  const currentActivity = STATION_ACTIVITIES[station][actIdx];
  const say = list => narrate(list, !muted);

  useEffect(() => {
    setShowHint(false);
    setFeedback(null);
    setDir(null);
    setPct(0);
    setAns1({});
    setOk1({});
    setDir2(null);
    setAns2({});
    setOk2({});
    setSolved2(false);
    setAns3({});
    setOk3({});
  }, [station, actIdx]);

  useEffect(() => {
    say(simulateActivityIntro(station, actIdx));
    return () => stopNarration();
  }, [station, actIdx, muted]);

  /* ---------- Station 1: Percent Slider ---------- */
  const s1 = station === 1 ? currentActivity : null;
  const signed = dir === 'down' ? -pct : pct;
  const dirOk = s1 ? dir === (s1.pct > 0 ? 'up' : 'down') : false;
  const pctOk = s1 ? pct === Math.abs(s1.pct) : false;
  const mult1 = s1 ? (100 + s1.pct) / 100 : 1;
  const new1 = s1 ? s1.orig * mult1 : 0;
  const nudge = d => { setPct(p => Math.max(0, Math.min(95, p + d))); setFeedback(null); };
  const check1 = () => {
    stopNarration();
    const ok = { m: near(ans1.m, mult1, 0.0001), v: near(ans1.v, new1) };
    setOk1(ok);
    if (dirOk && pctOk && ok.m && ok.v) {
      setFeedback({ success: true, text: `🎉 ${fmtMoney(s1.orig, s1.unit)} × ${mult1} = ${fmtMoney(new1, s1.unit)}` });
      say(feedbackNarration.splitDone());
    } else {
      setFeedback({ success: false, text: !dirOk ? 'Is this an increase or a decrease? Pick the right direction first.' : !pctOk ? `Slide the percentage to ${Math.abs(s1.pct)}%.` : !ok.m ? `Multiplier = (100 ${s1.pct > 0 ? '+' : '−'} ${Math.abs(s1.pct)}) ÷ 100.` : 'New amount = original × multiplier.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 2: Price Tracker ---------- */
  const s2 = station === 2 ? currentActivity : null;
  const change2 = s2 ? Math.abs(s2.after - s2.before) : 0;
  const pct2 = s2 ? (change2 / s2.before) * 100 : 0;
  const up2 = s2 ? s2.after > s2.before : false;
  const check2 = () => {
    stopNarration();
    const ok = { dir: dir2 === (up2 ? 'up' : 'down'), c: near(ans2.c, change2), p: near(ans2.p, pct2, 0.01) };
    setOk2(ok);
    if (ok.dir && ok.c && ok.p) {
      setSolved2(true);
      setFeedback({ success: true, text: `🎉 ${fmtN(change2)} ÷ ${fmtN(s2.before)} × 100 = ${fmtN(pct2)}% ${up2 ? 'increase' : 'decrease'}` });
      say(feedbackNarration.buildDone());
    } else {
      setFeedback({ success: false, text: !ok.dir ? 'Compare the two values: did it go up or down?' : !ok.c ? 'Change = the difference between the two values.' : 'Percentage change = change ÷ ORIGINAL × 100. Use the BEFORE value!' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 3: Change Chains ---------- */
  const s3 = station === 3 ? currentActivity : null;
  const want3 = k => {
    const f = s3.fields.find(x => x.key === k);
    if (f && f.answer !== undefined) return f.answer;
    return s3.nodes.find(n => n.key === k).answer;
  };
  const chainNodes = s3 ? s3.nodes.map(n => (n.given !== undefined
    ? { label: fmtMoney(n.given), caption: n.caption }
    : { label: ok3[n.key] ? fmtMoney(want3(n.key)) : '?', ok: ok3[n.key], caption: n.caption })) : [];
  const check3 = () => {
    stopNarration();
    const ok = {};
    s3.fields.forEach(f => { ok[f.key] = near(ans3[f.key], want3(f.key), 0.006); });
    setOk3(ok);
    if (Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: s3.done });
      say(feedbackNarration.reverseDone());
    } else {
      setFeedback({ success: false, text: 'Check the red boxes. Multiply to move forwards along the chain, divide to move backwards.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Navigation ---------- */
  const nextActivity = () => {
    stopNarration();
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    stopNarration();
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const toggleHint = () => {
    setShowHint(h => {
      const next = !h;
      if (next) {
        say(simulateActivityHint(station, actIdx));
      } else {
        stopNarration();
      }
      return next;
    });
  };

  const STATIONS = [
    { n: 1, icon: '🎚️', name: 'Station 1: Percent Slider', sub: 'Grow & shrink with multipliers' },
    { n: 2, icon: '📈', name: 'Station 2: Price Tracker', sub: 'Find the % change' },
    { n: 3, icon: '🔗', name: 'Station 3: Change Chains', sub: 'Repeat, reverse & compound' }
  ];

  const inputCls = ok =>
    `bg-[#14082c] border-2 rounded-xl px-3 py-2 text-white font-display font-900 text-base text-center outline-none w-24 shadow-inner ${
      ok === true ? 'border-emerald-400' : ok === false ? 'border-rose-400' : 'border-cyan-400/70 focus:border-amber-400'
    }`;

  const hintBtn = (
    <button
      onClick={toggleHint}
      className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs px-3 py-2 rounded-xl transition cursor-pointer"
    >
      💡 Hint
    </button>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATIONS.map(s => (
                <button
                  key={s.n}
                  onClick={() => {
                    stopNarration();
                    setStation(s.n);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === s.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === s.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{s.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={() => {
                stopNarration();
                onNext();
              }}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* ===================== STATION 1: PERCENT SLIDER ===================== */}
              {station === 1 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-2 overflow-y-auto">
                    <div className="flex items-center justify-between gap-2 shrink-0">
                      <span className="bg-[#14082c] rounded-full px-3 py-1 border border-white/10 text-sm font-900 text-amber-300">{s1.icon} Original: {fmtMoney(s1.orig, s1.unit)}</span>
                      <span className="text-[11px] font-900 text-slate-400">1 block = 10% = {fmtMoney(s1.orig / 10, s1.unit)}</span>
                    </div>
                    <svg viewBox="0 0 360 130" className="w-full flex-1 min-h-[90px]">
                      <PercentBars pct={dir ? signed : 0} showNew={!!dir} y={18} h={38} gap={26} fs={14} />
                    </svg>
                    <div className="flex items-center justify-center gap-2 shrink-0">
                      {[['up', '▲ Increase', C_UP], ['down', '▼ Decrease', C_DOWN]].map(([k, t, c]) => (
                        <button key={k} onClick={() => { setDir(k); setFeedback(null); }}
                          className={`px-3 py-1.5 rounded-xl border-2 text-xs font-900 cursor-pointer ${dir === k ? 'text-slate-950' : 'text-white bg-white/5 border-white/20'}`}
                          style={dir === k ? { background: c, borderColor: c } : undefined}>{t}</button>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 shrink-0">
                      {[-5, -1].map(d => <button key={d} onClick={() => nudge(d)} className="w-10 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-900 cursor-pointer">{d}</button>)}
                      <input type="range" min="0" max="95" value={pct} onChange={e => { setPct(Number(e.target.value)); setFeedback(null); }} className="w-32 sm:w-44 accent-amber-400" />
                      {[1, 5].map(d => <button key={d} onClick={() => nudge(d)} className="w-10 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-900 cursor-pointer">+{d}</button>)}
                      <span className="w-14 text-center font-display font-900 text-lg text-amber-300">{pct}%</span>
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Show the change</p>
                    {[[dirOk, 'Right direction'], [pctOk, 'Right percentage']].map(([ok, t]) => (
                      <div key={t} className={`rounded-xl px-3 py-1.5 border-2 text-xs font-900 ${ok ? 'bg-emerald-950/60 border-emerald-400/60 text-emerald-200' : 'bg-rose-950/40 border-rose-400/40 text-rose-200'}`}>{ok ? '✔' : '✗'} {t}</div>
                    ))}
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Use the multiplier</p>
                    {[['m', 'Multiplier ×'], ['v', `New amount${s1.unit === '$' ? ' ($)' : ` (${s1.unit})`}`]].map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1">{lab}</span>
                        <input type="number" value={ans1[k] ?? ''} onChange={e => setAns1(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check1()} className={inputCls(ok1[k]) + ' !w-24 !py-1'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check1} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 2: PRICE TRACKER ===================== */}
              {station === 2 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center gap-2">
                    <svg viewBox="0 30 360 120" className="w-full shrink-0 max-h-[45%]">
                      <PriceTags before={fmtMoney(s2.before, s2.unit)} after={fmtMoney(s2.after, s2.unit)} y={40} />
                    </svg>
                    <div className="w-full flex items-end justify-center gap-10 flex-1 min-h-0 max-h-[45%]">
                      {[['Before', s2.before, '#38bdf8'], ['After', s2.after, up2 ? C_UP : C_DOWN]].map(([lab, v, c]) => (
                        <div key={lab} className="flex flex-col items-center justify-end h-full">
                          <div className="w-14 rounded-t-xl" style={{ height: `${(v / Math.max(s2.before, s2.after)) * 100}%`, background: c, opacity: 0.8 }} />
                          <span className="text-[11px] font-900 text-slate-300 mt-1">{lab}</span>
                        </div>
                      ))}
                    </div>
                    <p className={`font-display font-900 text-lg ${solved2 ? (up2 ? 'text-emerald-300' : 'text-rose-300') : 'text-slate-500'}`}>
                      {solved2 ? `${up2 ? '+' : '−'}${fmtN(pct2)}%` : '? %'}
                    </p>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Up or down?</p>
                    <div className="flex gap-1.5">
                      {[['up', '▲ Increase', C_UP], ['down', '▼ Decrease', C_DOWN]].map(([k, t, c]) => (
                        <button key={k} onClick={() => { setDir2(k); setFeedback(null); }}
                          className={`flex-1 px-2 py-1.5 rounded-xl border-2 text-xs font-900 cursor-pointer ${dir2 === k ? 'text-slate-950' : 'text-white bg-white/5 border-white/20'} ${ok2.dir === false && dir2 === k ? 'ring-2 ring-rose-400' : ''}`}
                          style={dir2 === k ? { background: c, borderColor: c } : undefined}>{t}</button>
                      ))}
                    </div>
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Find the change</p>
                    {[['c', `Change${s2.unit === '$' ? ' ($)' : ` (${s2.unit})`}`], ['p', 'Percentage change (%)']].map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1">{lab}</span>
                        <input type="number" value={ans2[k] ?? ''} onChange={e => setAns2(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check2()} className={inputCls(ok2[k]) + ' !w-24 !py-1'} />
                      </div>
                    ))}
                    <p className="text-[11px] font-bold text-slate-400 italic">% change = change ÷ original × 100</p>
                    <div className="flex gap-2">
                      <button onClick={check2} disabled={!dir2} className="btn-gold flex-1 text-sm font-900 px-3 py-2 disabled:opacity-40">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 3: CHANGE CHAINS ===================== */}
              {station === 3 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center">
                    <svg viewBox="0 40 360 120" className="w-full max-h-full">
                      <Chain nodes={chainNodes} edges={s3.edges} y={78} fs={15} />
                    </svg>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">Follow the chain</p>
                    {s3.fields.map(f => (
                      <div key={f.key} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-200 flex-1 leading-tight">{f.label}</span>
                        <input type="number" value={ans3[f.key] ?? ''} onChange={e => setAns3(a => ({ ...a, [f.key]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check3()} className={inputCls(ok3[f.key]) + ' !w-24 !py-1'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check3} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* Hint + feedback strip */}
              {showHint && (
                <div className="p-2.5 mt-2 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                  💡 {currentActivity.hint}
                </div>
              )}
              {feedback && (
                <div className={`p-2.5 mt-2 rounded-2xl text-sm font-900 w-full text-center shadow-xl shrink-0 fade-in-up ${
                  feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
                }`}>
                  {feedback.text}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-3 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
