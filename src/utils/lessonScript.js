/* =========================================================================
   LESSON SCRIPT — single source of truth for every spoken line.
   ---------------------------------------------------------------------------
   • UI components DISPLAY these exact strings.
   • src/utils/narration.js wraps them in styled segments for playback.
   • scripts/generate_audio.js reads ALL_PHRASES to pre-generate the MP3s.
   Because all three read the same strings, on-screen text and audio can
   never drift apart (1:1 parity).

   CONTENT POLICY: only paragraphs and questions are narrated.
   Titles, headings and labels live in the components and are NEVER spoken.
   Plain ESM (no Vite-only APIs) so Node scripts can import it too.
   ========================================================================= */
import { PRACTICE_QUESTIONS } from '../mathData.js';

export const WONDER = {
  paragraph:
    "Leo spots a jacket for $80. The next week the shop raises the price by 25 percent. Then a big sale takes 25 percent off. Leo thinks the jacket must be back to $80, but the price tag says something different!",
  question:
    "If a price goes up 25 percent and then down 25 percent, why doesn't it end up where it started?"
};

export const STORY = [
  {
    body: "Percent means per hundred. 25 percent means 25 out of every 100. To find a percentage of an amount, change the percentage to a decimal and multiply. 25 percent of $80 is 0.25 times 80, which is $20.",
    style: 'statement'
  },
  {
    body: "To increase an amount by a percentage, add the increase to 100 percent. A 25 percent increase gives 125 percent, so the multiplier is 1.25. The new price is 80 times 1.25, which is $100.",
    style: 'emphasis'
  },
  {
    body: "To decrease an amount, subtract from 100 percent. A 25 percent decrease leaves 75 percent, so the multiplier is 0.75. A multiplier bigger than 1 means an increase, and smaller than 1 means a decrease.",
    style: 'statement'
  },
  {
    body: "Leo's mystery is solved! The 25 percent sale was taken off $100, not $80. 100 times 0.75 is $75. The two changes were percentages of DIFFERENT amounts, so they don't cancel out. Overall it is 1.25 times 0.75, which is 0.9375.",
    style: 'encouragement'
  },
  {
    body: "To find a percentage change, divide the change by the ORIGINAL amount and multiply by 100. A game that drops from $250 to $200 changes by $50. 50 divided by 250 is 0.2, so that is a 20 percent decrease.",
    style: 'thinking'
  },
  {
    body: "Sometimes you know the new amount and need the original. A shirt costs $68 after 15 percent off. The multiplier is 0.85, so divide: 68 divided by 0.85 is $80. Never just add 15 percent back on!",
    style: 'emphasis'
  },
  {
    body: "Repeated changes multiply again and again. $500 in a bank that grows by 4 percent each year becomes 500 times 1.04 times 1.04 times 1.04. After 3 years that is about $562.43. This is called compound growth.",
    style: 'statement'
  },
  {
    body: "Brilliant! You can now increase and decrease amounts, use multipliers, find percentage change, work backwards and handle repeated changes. Step into the lab to slide percentages, track prices and crack real money puzzles!",
    style: 'celebration'
  }
];

export const SIMULATE = {
  1: "Choose increase or decrease, then slide the percentage until it matches the problem. Watch the bar grow or shrink, then find the multiplier and the new amount!",
  2: "Prices are on the move! Decide whether each one went up or down, then find the change and the percentage change.",
  3: "Follow the chain of changes. Use multipliers to move forwards and backwards along it, and solve each real-life puzzle!"
};

export const SIMULATION_ACTIVITIES = {
  1: [
    {
      desc: "Leo's $80 jacket goes up in price by 25%. Set the slider to show the change, then find the multiplier and the new price.",
      hint: "An increase of 25% means 100% + 25% = 125%, so the multiplier is 1.25. Then 80 × 1.25."
    },
    {
      desc: "A $60 pair of trainers is reduced by 15% in a sale. Set the slider, then find the multiplier and the sale price.",
      hint: "A decrease of 15% leaves 100% − 15% = 85%, so the multiplier is 0.85. Then 60 × 0.85."
    },
    {
      desc: "A phone battery holds 4,500 mAh when new. After two years it has lost 40% of its capacity. Set the slider, then find the multiplier and the new capacity.",
      hint: "Losing 40% leaves 60%, so the multiplier is 0.6. Then 4,500 × 0.6."
    }
  ],
  2: [
    {
      desc: "A game console used to cost $250. Now it costs $200. Did the price go up or down, and by what percentage?",
      hint: "Change = 250 − 200 = $50. Percentage change = 50 ÷ 250 (the ORIGINAL) × 100."
    },
    {
      desc: "Last year a concert ticket cost $40. This year it costs $46. Find the change and the percentage change.",
      hint: "Change = 46 − 40 = $6. Percentage change = 6 ÷ 40 × 100."
    },
    {
      desc: "A town had 12,000 people. Five years later it has 13,500 people. Find the change and the percentage change.",
      hint: "Change = 1,500 people. Percentage change = 1,500 ÷ 12,000 × 100."
    }
  ],
  3: [
    {
      desc: "The $80 jacket rises by 25%, then a sale takes 25% off the NEW price. Follow the chain and find the overall percentage change.",
      hint: "80 × 1.25 = 100, then 100 × 0.75 = 75. The drop of $5 compared with the ORIGINAL $80 is 5 ÷ 80 × 100."
    },
    {
      desc: "Mia buys a shirt for $68 in a '15% off' sale. What was the original price? Run the chain backwards!",
      hint: "Original × 0.85 = 68, so original = 68 ÷ 0.85. Saved = original − 68."
    },
    {
      desc: "Leo puts $500 in a savings account that grows by 4% every year. Follow the chain for 3 years (round to the nearest cent).",
      hint: "Multiply by 1.04 each year: 500 × 1.04 = 520, 520 × 1.04 = 540.80, and so on."
    }
  ]
};

export const REFLECT = {
  question:
    "Why doesn't a 25 percent increase followed by a 25 percent decrease bring you back to the start? Explain it to Robo with your own example!"
};

export const FEEDBACK = {
  splitDone: "Awesome! You used the multiplier perfectly!",
  buildDone: "Great tracking! You found the percentage change!",
  reverseDone: "Brilliant! You cracked the chain of changes!",
  tryAgain: "Not quite. Try again!",
  practiceCorrect: "Correct! Excellent work with percentages!",
  practiceWrong: "Not quite!",
  lessonDone: "Outstanding reflection! Lesson complete!"
};

// Flatten simulation guidance
const SIMULATION_PHRASES = [];
for (const stationKey of [1, 2, 3]) {
  for (const act of SIMULATION_ACTIVITIES[stationKey]) {
    SIMULATION_PHRASES.push({ text: act.desc, style: 'instruction' });
    SIMULATION_PHRASES.push({ text: act.hint, style: 'thinking' });
  }
}

// Flatten all 100 practice questions and their hints
const PRACTICE_PHRASES = [];
for (const world of PRACTICE_QUESTIONS) {
  for (const q of world) {
    PRACTICE_PHRASES.push({ text: q.prompt, style: 'question' });
    PRACTICE_PHRASES.push({ text: q.hint, style: 'thinking' });
  }
}

/** Every phrase that should exist as a pre-generated MP3, with its voice style. */
export const ALL_PHRASES = [
  { text: WONDER.paragraph, style: 'statement' },
  { text: WONDER.question, style: 'question' },
  ...STORY.map(s => ({ text: s.body, style: s.style })),
  { text: SIMULATE[1], style: 'instruction' },
  { text: SIMULATE[2], style: 'instruction' },
  { text: SIMULATE[3], style: 'question' },
  ...SIMULATION_PHRASES,
  { text: REFLECT.question, style: 'thinking' },
  { text: FEEDBACK.splitDone, style: 'celebration' },
  { text: FEEDBACK.buildDone, style: 'celebration' },
  { text: FEEDBACK.reverseDone, style: 'celebration' },
  { text: FEEDBACK.tryAgain, style: 'encouragement' },
  { text: FEEDBACK.practiceCorrect, style: 'celebration' },
  { text: FEEDBACK.practiceWrong, style: 'encouragement' },
  { text: FEEDBACK.lessonDone, style: 'celebration' },
  ...PRACTICE_PHRASES
];
