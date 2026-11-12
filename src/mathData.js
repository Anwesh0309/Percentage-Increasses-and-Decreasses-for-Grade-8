/* =========================================================================
   MATH DATA & 100 CURATED GRADE 8 PRACTICE QUESTIONS (10 WORLDS × 10 QUESTIONS)
   Covers every curriculum outcome: Percent of amounts, Multipliers, Increases,
   Decreases/Discounts, Percentage Change, Taxes/Tips, Reverse Percentages,
   Successive/Chain Changes, Compound Growth & Depreciation, and Mixed Mastery.
   Every question has a curated prompt, step-by-step hint, and visual diagram.
   ========================================================================= */

export const PRACTICE_WORLDS = [
  { id: 0, name: "Percent Port", icon: "⚓", range: "Q1–10", difficulty: 1 },
  { id: 1, name: "Multiplier Mall", icon: "🏬", range: "Q11–20", difficulty: 1 },
  { id: 2, name: "Increase Island", icon: "📈", range: "Q21–30", difficulty: 2 },
  { id: 3, name: "Discount District", icon: "🏷️", range: "Q31–40", difficulty: 2 },
  { id: 4, name: "Change Canyon", icon: "🏜️", range: "Q41–50", difficulty: 2 },
  { id: 5, name: "Tax Town", icon: "🧾", range: "Q51–60", difficulty: 3 },
  { id: 6, name: "Reverse River", icon: "🔙", range: "Q61–70", difficulty: 3 },
  { id: 7, name: "Chain Cliffs", icon: "🔗", range: "Q71–80", difficulty: 3 },
  { id: 8, name: "Compound Cove", icon: "🏦", range: "Q81–90", difficulty: 4 },
  { id: 9, name: "Percent Champion", icon: "🏆", range: "Q91–100", difficulty: 4 }
];

export const RULES = {
  of: "✦ % → DECIMAL, THEN MULTIPLY",
  inc: "✦ INCREASE: × (1 + %)",
  dec: "✦ DECREASE: × (1 − %)",
  mult: "✦ 100% ± CHANGE",
  change: "✦ CHANGE ÷ ORIGINAL × 100",
  reverse: "✦ DIVIDE BY THE MULTIPLIER",
  chain: "✦ MULTIPLY THE MULTIPLIERS",
  compound: "✦ × MULTIPLIER EACH YEAR"
};

export const PRACTICE_QUESTIONS = [
  // World 0: Percent Port (Q1–10)
  [
    {
      id: 1, prompt: "What is 10% of $50?",
      hint: "10% means 10 out of 100, which is 0.10. Multiply 50 by 0.10 to get $5.",
      options: ["$5", "$10", "$50", "$15"], correctIndex: 0, correctValue: "$5",
      explanation: "10% = 0.10. 0.10 × $50 = $5.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 10 }
    },
    {
      id: 2, prompt: "What is 25% of $80?",
      hint: "25% is one quarter or 0.25. Multiply 80 by 0.25 to get $20.",
      options: ["$20", "$25", "$40", "$15"], correctIndex: 0, correctValue: "$20",
      explanation: "25% = 0.25. 0.25 × $80 = $20.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 25 }
    },
    {
      id: 3, prompt: "What is 50% of $160?",
      hint: "50% is half of the amount. 160 divided by 2 is $80.",
      options: ["$80", "$50", "$90", "$60"], correctIndex: 0, correctValue: "$80",
      explanation: "50% = 0.50. 0.50 × $160 = $80.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 50 }
    },
    {
      id: 4, prompt: "What is 20% of $60?",
      hint: "20% is 0.20. Multiply 60 by 0.20 to get $12.",
      options: ["$12", "$20", "$15", "$8"], correctIndex: 0, correctValue: "$12",
      explanation: "20% = 0.20. 0.20 × $60 = $12.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 20 }
    },
    {
      id: 5, prompt: "What is 75% of $120?",
      hint: "75% is 3 quarters or 0.75. 120 times 0.75 equals $90.",
      options: ["$90", "$75", "$85", "$100"], correctIndex: 0, correctValue: "$90",
      explanation: "75% = 0.75. 0.75 × $120 = $90.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 75 }
    },
    {
      id: 6, prompt: "What is 5% of $200?",
      hint: "5% is 0.05. Multiply 200 by 0.05 to get $10.",
      options: ["$10", "$5", "$20", "$15"], correctIndex: 0, correctValue: "$10",
      explanation: "5% = 0.05. 0.05 × $200 = $10.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 5 }
    },
    {
      id: 7, prompt: "What is 15% of $40?",
      hint: "10% of 40 is $4, and 5% is $2. Add them together to get $6.",
      options: ["$6", "$15", "$8", "$4"], correctIndex: 0, correctValue: "$6",
      explanation: "15% = 0.15. 0.15 × $40 = $6.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 15 }
    },
    {
      id: 8, prompt: "What is 30% of $90?",
      hint: "30% is 0.30. Multiply 90 by 0.30 to get $27.",
      options: ["$27", "$30", "$24", "$18"], correctIndex: 0, correctValue: "$27",
      explanation: "30% = 0.30. 0.30 × $90 = $27.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 30 }
    },
    {
      id: 9, prompt: "What is 40% of $250?",
      hint: "40% is 0.40. Multiply 250 by 0.40 to get $100.",
      options: ["$100", "$40", "$120", "$90"], correctIndex: 0, correctValue: "$100",
      explanation: "40% = 0.40. 0.40 × $250 = $100.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 40 }
    },
    {
      id: 10, prompt: "What is 35% of $80?",
      hint: "35% is 0.35. Multiply 80 by 0.35 to get $28.",
      options: ["$28", "$35", "$24", "$32"], correctIndex: 0, correctValue: "$28",
      explanation: "35% = 0.35. 0.35 × $80 = $28.", rule: RULES.of,
      diagramData: { type: 'bars', pct: 35 }
    }
  ],

  // World 1: Multiplier Mall (Q11–20)
  [
    {
      id: 11, prompt: "What single number do you multiply by to INCREASE an amount by 20%?",
      hint: "For a 20% increase, add 20% to 100% to get 120%. As a decimal, that is 1.2.",
      options: ["1.2", "0.2", "1.02", "1.25"], correctIndex: 0, correctValue: "1.2",
      explanation: "Increase: 100% + 20% = 120%, so the multiplier is 1.2.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: 20 }
    },
    {
      id: 12, prompt: "What single number do you multiply by to DECREASE an amount by 15%?",
      hint: "For a 15% decrease, subtract 15% from 100% to get 85%. As a decimal, that is 0.85.",
      options: ["0.85", "0.15", "1.15", "0.75"], correctIndex: 0, correctValue: "0.85",
      explanation: "Decrease: 100% − 15% = 85%, so the multiplier is 0.85.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: -15 }
    },
    {
      id: 13, prompt: "What single number do you multiply by to INCREASE an amount by 5%?",
      hint: "100% plus 5% is 105%. Convert to decimal by dividing by 100 to get 1.05.",
      options: ["1.05", "1.5", "0.05", "0.95"], correctIndex: 0, correctValue: "1.05",
      explanation: "Increase: 100% + 5% = 105%, so the multiplier is 1.05.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: 5 }
    },
    {
      id: 14, prompt: "What single number do you multiply by to DECREASE an amount by 30%?",
      hint: "100% minus 30% is 70%. Convert to decimal to get 0.7.",
      options: ["0.7", "0.3", "1.3", "0.6"], correctIndex: 0, correctValue: "0.7",
      explanation: "Decrease: 100% − 30% = 70%, so the multiplier is 0.7.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: -30 }
    },
    {
      id: 15, prompt: "What single number do you multiply by to INCREASE an amount by 45%?",
      hint: "100% plus 45% is 145%, which gives a multiplier of 1.45.",
      options: ["1.45", "0.45", "1.55", "1.4"], correctIndex: 0, correctValue: "1.45",
      explanation: "Increase: 100% + 45% = 145%, so the multiplier is 1.45.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: 45 }
    },
    {
      id: 16, prompt: "What single number do you multiply by to DECREASE an amount by 8%?",
      hint: "100% minus 8% is 92%. Divide 92 by 100 to get 0.92.",
      options: ["0.92", "0.08", "0.82", "1.08"], correctIndex: 0, correctValue: "0.92",
      explanation: "Decrease: 100% − 8% = 92%, so the multiplier is 0.92.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: -8 }
    },
    {
      id: 17, prompt: "What single number do you multiply by to INCREASE an amount by 75%?",
      hint: "100% plus 75% equals 175%, so the multiplier is 1.75.",
      options: ["1.75", "0.75", "1.25", "2.75"], correctIndex: 0, correctValue: "1.75",
      explanation: "Increase: 100% + 75% = 175%, so the multiplier is 1.75.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: 75 }
    },
    {
      id: 18, prompt: "What single number do you multiply by to DECREASE an amount by 25%?",
      hint: "100% minus 25% equals 75%, so the multiplier is 0.75.",
      options: ["0.75", "0.25", "1.25", "0.8"], correctIndex: 0, correctValue: "0.75",
      explanation: "Decrease: 100% − 25% = 75%, so the multiplier is 0.75.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: -25 }
    },
    {
      id: 19, prompt: "What single number do you multiply by to INCREASE an amount by 12%?",
      hint: "100% plus 12% is 112%, which corresponds to multiplier 1.12.",
      options: ["1.12", "1.2", "0.12", "1.02"], correctIndex: 0, correctValue: "1.12",
      explanation: "Increase: 100% + 12% = 112%, so the multiplier is 1.12.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: 12 }
    },
    {
      id: 20, prompt: "What single number do you multiply by to DECREASE an amount by 50%?",
      hint: "100% minus 50% leaves 50%, so the multiplier is 0.5.",
      options: ["0.5", "1.5", "0.05", "0.25"], correctIndex: 0, correctValue: "0.5",
      explanation: "Decrease: 100% − 50% = 50%, so the multiplier is 0.5.", rule: RULES.mult,
      diagramData: { type: 'bars', pct: -50 }
    }
  ],

  // World 2: Increase Island (Q21–30)
  [
    {
      id: 21, prompt: "The price of rent is $800. It increases by 10%. What is the new price?",
      hint: "10% of 800 is $80. Add $80 to $800 to get the new price of $880.",
      options: ["$880", "$810", "$900", "$850"], correctIndex: 0, correctValue: "$880",
      explanation: "Multiplier = 1.10. $800 × 1.10 = $880.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 10 }
    },
    {
      id: 22, prompt: "A gym membership costs $50 per month. The fee increases by 20%. What is the new fee?",
      hint: "Multiplier is 1.20. Multiply 50 by 1.20 to get $60.",
      options: ["$60", "$70", "$55", "$65"], correctIndex: 0, correctValue: "$60",
      explanation: "Multiplier = 1.20. $50 × 1.20 = $60.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 20 }
    },
    {
      id: 23, prompt: "A bus fare of $4 increases by 25%. What is the new fare?",
      hint: "25% of 4 is $1. Add 1 to 4 to get $5.",
      options: ["$5", "$4.25", "$6", "$4.50"], correctIndex: 0, correctValue: "$5",
      explanation: "Multiplier = 1.25. $4 × 1.25 = $5.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 25 }
    },
    {
      id: 24, prompt: "A jacket priced at $120 increases by 15%. What is the new price?",
      hint: "15% of 120 is $18. 120 plus 18 equals $138.",
      options: ["$138", "$135", "$140", "$132"], correctIndex: 0, correctValue: "$138",
      explanation: "Multiplier = 1.15. $120 × 1.15 = $138.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 15 }
    },
    {
      id: 25, prompt: "An electricity bill of $200 increases by 8%. What is the new bill?",
      hint: "8% of 200 is $16. 200 plus 16 equals $216.",
      options: ["$216", "$208", "$220", "$218"], correctIndex: 0, correctValue: "$216",
      explanation: "Multiplier = 1.08. $200 × 1.08 = $216.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 8 }
    },
    {
      id: 26, prompt: "A concert ticket of $60 increases by 30%. What is the new price?",
      hint: "Multiplier is 1.30. 60 times 1.30 equals $78.",
      options: ["$78", "$90", "$72", "$80"], correctIndex: 0, correctValue: "$78",
      explanation: "Multiplier = 1.30. $60 × 1.30 = $78.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 30 }
    },
    {
      id: 27, prompt: "A pair of shoes costs $80. The price goes up by 25%. What is the new price?",
      hint: "25% of 80 is $20. 80 plus 20 equals $100.",
      options: ["$100", "$105", "$95", "$110"], correctIndex: 0, correctValue: "$100",
      explanation: "Multiplier = 1.25. $80 × 1.25 = $100.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 25 }
    },
    {
      id: 28, prompt: "A train pass costs $150. It increases by 10%. What is the new price?",
      hint: "10% of 150 is $15. Add 15 to 150 to get $165.",
      options: ["$165", "$160", "$170", "$175"], correctIndex: 0, correctValue: "$165",
      explanation: "Multiplier = 1.10. $150 × 1.10 = $165.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 10 }
    },
    {
      id: 29, prompt: "A book subscription of $40 increases by 5%. What is the new price?",
      hint: "5% of 40 is $2. 40 plus 2 equals $42.",
      options: ["$42", "$45", "$41", "$44"], correctIndex: 0, correctValue: "$42",
      explanation: "Multiplier = 1.05. $40 × 1.05 = $42.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 5 }
    },
    {
      id: 30, prompt: "A tablet priced at $400 increases by 12%. What is the new price?",
      hint: "Multiplier is 1.12. 400 times 1.12 equals $448.",
      options: ["$448", "$440", "$450", "$412"], correctIndex: 0, correctValue: "$448",
      explanation: "Multiplier = 1.12. $400 × 1.12 = $448.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 12 }
    }
  ],

  // World 3: Discount District (Q31–40)
  [
    {
      id: 31, prompt: "Leo sees a skateboard priced at $80 with 25% off. What is the sale price?",
      hint: "25% off leaves 75%. Multiply 80 by 0.75 to get $60.",
      options: ["$60", "$65", "$55", "$70"], correctIndex: 0, correctValue: "$60",
      explanation: "25% off leaves 75%. $80 × 0.75 = $60.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$80", after: "?" }
    },
    {
      id: 32, prompt: "Emma sees a jacket priced at $120 with 20% off. What is the sale price?",
      hint: "20% off leaves 80%. 120 times 0.80 equals $96.",
      options: ["$96", "$100", "$90", "$104"], correctIndex: 0, correctValue: "$96",
      explanation: "20% off leaves 80%. $120 × 0.80 = $96.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$120", after: "?" }
    },
    {
      id: 33, prompt: "Alex sees a pair of shoes priced at $60 with 15% off. What is the sale price?",
      hint: "15% of 60 is $9. Subtract 9 from 60 to get $51.",
      options: ["$51", "$50", "$45", "$54"], correctIndex: 0, correctValue: "$51",
      explanation: "15% off leaves 85%. $60 × 0.85 = $51.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$60", after: "?" }
    },
    {
      id: 34, prompt: "Sophia sees a laptop priced at $500 with 10% off. What is the sale price?",
      hint: "10% of 500 is $50. 500 minus 50 is $450.",
      options: ["$450", "$400", "$490", "$460"], correctIndex: 0, correctValue: "$450",
      explanation: "10% off leaves 90%. $500 × 0.90 = $450.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$500", after: "?" }
    },
    {
      id: 35, prompt: "Oliver sees a guitar priced at $200 with 30% off. What is the sale price?",
      hint: "30% off leaves 70%. Multiply 200 by 0.70 to get $140.",
      options: ["$140", "$150", "$130", "$160"], correctIndex: 0, correctValue: "$140",
      explanation: "30% off leaves 70%. $200 × 0.70 = $140.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$200", after: "?" }
    },
    {
      id: 36, prompt: "Jack sees a phone priced at $400 with 40% off. What is the sale price?",
      hint: "40% off leaves 60%. 400 times 0.60 equals $240.",
      options: ["$240", "$260", "$250", "$200"], correctIndex: 0, correctValue: "$240",
      explanation: "40% off leaves 60%. $400 × 0.60 = $240.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$400", after: "?" }
    },
    {
      id: 37, prompt: "Maya sees a backpack priced at $50 with 10% off. What is the sale price?",
      hint: "10% of 50 is $5. 50 minus 5 equals $45.",
      options: ["$45", "$40", "$48", "$42"], correctIndex: 0, correctValue: "$45",
      explanation: "10% off leaves 90%. $50 × 0.90 = $45.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$50", after: "?" }
    },
    {
      id: 38, prompt: "Lucas sees a bike priced at $250 with 20% off. What is the sale price?",
      hint: "20% of 250 is $50. 250 minus 50 equals $200.",
      options: ["$200", "$210", "$190", "$220"], correctIndex: 0, correctValue: "$200",
      explanation: "20% off leaves 80%. $250 × 0.80 = $200.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$250", after: "?" }
    },
    {
      id: 39, prompt: "Ethan sees headphones priced at $90 with 50% off. What is the sale price?",
      hint: "50% off is half price. 90 divided by 2 is $45.",
      options: ["$45", "$40", "$50", "$35"], correctIndex: 0, correctValue: "$45",
      explanation: "50% off leaves 50%. $90 × 0.50 = $45.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$90", after: "?" }
    },
    {
      id: 40, prompt: "Chloe sees a watch priced at $160 with 25% off. What is the sale price?",
      hint: "25% of 160 is $40. 160 minus 40 equals $120.",
      options: ["$120", "$125", "$115", "$130"], correctIndex: 0, correctValue: "$120",
      explanation: "25% off leaves 75%. $160 × 0.75 = $120.", rule: RULES.dec,
      diagramData: { type: 'tags', before: "$160", after: "?" }
    }
  ],

  // World 4: Change Canyon (Q41–50)
  [
    {
      id: 41, prompt: "A game console price changes from $250 to $200. What is the percentage change?",
      hint: "Change is 50. Divide 50 by the original 250 and multiply by 100 to get a 20% decrease.",
      options: ["20% decrease", "20% increase", "25% decrease", "50% decrease"], correctIndex: 0, correctValue: "20% decrease",
      explanation: "Change = $50. $50 ÷ $250 × 100 = 20% decrease.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$250", after: "$200" }
    },
    {
      id: 42, prompt: "A concert ticket price changes from $40 to $46. What is the percentage change?",
      hint: "Change is 6. Divide 6 by original 40 and multiply by 100 to get a 15% increase.",
      options: ["15% increase", "15% decrease", "12% increase", "6% increase"], correctIndex: 0, correctValue: "15% increase",
      explanation: "Change = $6. $6 ÷ $40 × 100 = 15% increase.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$40", after: "$46" }
    },
    {
      id: 43, prompt: "Leo's savings change from $80 to $100. What is the percentage change?",
      hint: "Change is 20. Divide 20 by the original 80 and multiply by 100 to get a 25% increase.",
      options: ["25% increase", "20% increase", "25% decrease", "30% increase"], correctIndex: 0, correctValue: "25% increase",
      explanation: "Change = $20. $20 ÷ $80 × 100 = 25% increase.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$80", after: "$100" }
    },
    {
      id: 44, prompt: "A jacket price drops from $100 to $75. What is the percentage change?",
      hint: "Change is 25. Divide 25 by the original 100 and multiply by 100 to get a 25% decrease.",
      options: ["25% decrease", "25% increase", "33% decrease", "20% decrease"], correctIndex: 0, correctValue: "25% decrease",
      explanation: "Change = $25. $25 ÷ $100 × 100 = 25% decrease.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$100", after: "$75" }
    },
    {
      id: 45, prompt: "A shop changes the price of a bike from $200 to $240. What is the percentage change?",
      hint: "Change is 40. Divide 40 by the original 200 and multiply by 100 to get a 20% increase.",
      options: ["20% increase", "20% decrease", "25% increase", "40% increase"], correctIndex: 0, correctValue: "20% increase",
      explanation: "Change = $40. $40 ÷ $200 × 100 = 20% increase.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$200", after: "$240" }
    },
    {
      id: 46, prompt: "A pair of shoes changes in price from $80 to $60. What is the percentage change?",
      hint: "Change is 20. Divide 20 by the original 80 to get 0.25, which is a 25% decrease.",
      options: ["25% decrease", "20% decrease", "25% increase", "30% decrease"], correctIndex: 0, correctValue: "25% decrease",
      explanation: "Change = $20. $20 ÷ $80 × 100 = 25% decrease.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$80", after: "$60" }
    },
    {
      id: 47, prompt: "Website daily visitors change from 400 to 480. What is the percentage change?",
      hint: "Change is 80. Divide 80 by original 400 and multiply by 100 to get a 20% increase.",
      options: ["20% increase", "20% decrease", "15% increase", "25% increase"], correctIndex: 0, correctValue: "20% increase",
      explanation: "Change = 80. 80 ÷ 400 × 100 = 20% increase.", rule: RULES.change,
      diagramData: { type: 'tags', before: "400", after: "480" }
    },
    {
      id: 48, prompt: "A park's daily visitors change from 500 to 450. What is the percentage change?",
      hint: "Change is 50. Divide 50 by original 500 to get 0.10, which is a 10% decrease.",
      options: ["10% decrease", "10% increase", "15% decrease", "5% decrease"], correctIndex: 0, correctValue: "10% decrease",
      explanation: "Change = 50. 50 ÷ 500 × 100 = 10% decrease.", rule: RULES.change,
      diagramData: { type: 'tags', before: "500", after: "450" }
    },
    {
      id: 49, prompt: "The price of a phone changes from $800 to $720. What is the percentage change?",
      hint: "Change is 80. Divide 80 by original 800 and multiply by 100 to get a 10% decrease.",
      options: ["10% decrease", "10% increase", "8% decrease", "12% decrease"], correctIndex: 0, correctValue: "10% decrease",
      explanation: "Change = $80. $80 ÷ $800 × 100 = 10% decrease.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$800", after: "$720" }
    },
    {
      id: 50, prompt: "A bus fare changes from $4 to $5. What is the percentage change?",
      hint: "Change is 1. Divide 1 by the original 4 to get 0.25, which is a 25% increase.",
      options: ["25% increase", "20% increase", "25% decrease", "15% increase"], correctIndex: 0, correctValue: "25% increase",
      explanation: "Change = $1. $1 ÷ $4 × 100 = 25% increase.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$4", after: "$5" }
    }
  ],

  // World 5: Tax Town (Q51–60)
  [
    {
      id: 51, prompt: "Liam pays for a meal costing $50, plus a service charge of 10%. What is the total cost?",
      hint: "10% of 50 is $5. Add 5 to 50 to get a total of $55.",
      options: ["$55", "$50", "$60", "$52"], correctIndex: 0, correctValue: "$55",
      explanation: "$50 × 1.10 = $55.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 10 }
    },
    {
      id: 52, prompt: "Harper pays for a hotel room costing $200, plus tax of 8%. What is the total cost?",
      hint: "Multiplier is 1.08. Multiply 200 by 1.08 to get $216.",
      options: ["$216", "$208", "$220", "$218"], correctIndex: 0, correctValue: "$216",
      explanation: "$200 × 1.08 = $216.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 8 }
    },
    {
      id: 53, prompt: "Ava pays for a TV costing $400, plus sales tax of 5%. What is the total cost?",
      hint: "5% of 400 is $20. Add 20 to 400 to get $420.",
      options: ["$420", "$410", "$425", "$405"], correctIndex: 0, correctValue: "$420",
      explanation: "$400 × 1.05 = $420.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 5 }
    },
    {
      id: 54, prompt: "Mason pays for a taxi ride costing $40, plus a tip of 15%. What is the total cost?",
      hint: "15% of 40 is $6. Add 6 to 40 to get $46.",
      options: ["$46", "$45", "$48", "$44"], correctIndex: 0, correctValue: "$46",
      explanation: "$40 × 1.15 = $46.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 15 }
    },
    {
      id: 55, prompt: "Ella pays for dinner costing $80, plus a service charge of 20%. What is the total cost?",
      hint: "20% of 80 is $16. 80 plus 16 equals $96.",
      options: ["$96", "$100", "$90", "$92"], correctIndex: 0, correctValue: "$96",
      explanation: "$80 × 1.20 = $96.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 20 }
    },
    {
      id: 56, prompt: "James buys tools costing $150, plus sales tax of 6%. What is the total cost?",
      hint: "6% of 150 is $9. Add 9 to 150 to get $159.",
      options: ["$159", "$156", "$160", "$158"], correctIndex: 0, correctValue: "$159",
      explanation: "$150 × 1.06 = $159.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 6 }
    },
    {
      id: 57, prompt: "Mia pays for catering costing $250, plus a tax of 12%. What is the total cost?",
      hint: "12% of 250 is $30. 250 plus 30 equals $280.",
      options: ["$280", "$275", "$285", "$270"], correctIndex: 0, correctValue: "$280",
      explanation: "$250 × 1.12 = $280.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 12 }
    },
    {
      id: 58, prompt: "Logan pays for a tablet costing $300, plus sales tax of 10%. What is the total cost?",
      hint: "10% of 300 is $30. Add 30 to 300 to get $330.",
      options: ["$330", "$320", "$340", "$310"], correctIndex: 0, correctValue: "$330",
      explanation: "$300 × 1.10 = $330.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 10 }
    },
    {
      id: 59, prompt: "Charlotte pays for a spa session costing $60, plus a tip of 15%. What is the total cost?",
      hint: "15% of 60 is $9. 60 plus 9 equals $69.",
      options: ["$69", "$66", "$70", "$68"], correctIndex: 0, correctValue: "$69",
      explanation: "$60 × 1.15 = $69.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 15 }
    },
    {
      id: 60, prompt: "Noah buys furniture costing $500, plus sales tax of 8%. What is the total cost?",
      hint: "Multiplier is 1.08. 500 times 1.08 equals $540.",
      options: ["$540", "$530", "$550", "$508"], correctIndex: 0, correctValue: "$540",
      explanation: "$500 × 1.08 = $540.", rule: RULES.inc,
      diagramData: { type: 'bars', pct: 8 }
    }
  ],

  // World 6: Reverse River (Q61–70)
  [
    {
      id: 61, prompt: "After a 20% price rise, a concert ticket costs $60. What was the price BEFORE the rise?",
      hint: "The multiplier for a 20% rise is 1.20. Divide 60 by 1.20 to get the original $50.",
      options: ["$50", "$48", "$52", "$45"], correctIndex: 0, correctValue: "$50",
      explanation: "Original × 1.20 = $60, so original = $60 ÷ 1.20 = $50.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$60', caption: 'after rise' }], edges: ['+20% (×1.20)'] }
    },
    {
      id: 62, prompt: "In a 20% off sale, Leo pays $80 for a jacket. What was the ORIGINAL price?",
      hint: "20% off leaves 80%, so the multiplier is 0.80. Divide 80 by 0.80 to get $100.",
      options: ["$100", "$96", "$105", "$95"], correctIndex: 0, correctValue: "$100",
      explanation: "Original × 0.80 = $80, so original = $80 ÷ 0.80 = $100.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$80', caption: 'sale price' }], edges: ['−20% (×0.80)'] }
    },
    {
      id: 63, prompt: "After a 25% price increase, a train ticket costs $100. What was the price BEFORE the increase?",
      hint: "The multiplier is 1.25. Divide 100 by 1.25 to get the original price of $80.",
      options: ["$80", "$75", "$85", "$90"], correctIndex: 0, correctValue: "$80",
      explanation: "Original × 1.25 = $100, so original = $100 ÷ 1.25 = $80.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$100', caption: 'after rise' }], edges: ['+25% (×1.25)'] }
    },
    {
      id: 64, prompt: "In a 15% off sale, Mia pays $68 for a shirt. What was the ORIGINAL price?",
      hint: "15% off leaves 85%, so the multiplier is 0.85. Divide 68 by 0.85 to get $80.",
      options: ["$80", "$78.20", "$82", "$75"], correctIndex: 0, correctValue: "$80",
      explanation: "Original × 0.85 = $68, so original = $68 ÷ 0.85 = $80.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$68', caption: 'sale price' }], edges: ['−15% (×0.85)'] }
    },
    {
      id: 65, prompt: "After a 10% price rise, a gym pass costs $44. What was the price BEFORE the rise?",
      hint: "Multiplier is 1.10. Divide 44 by 1.10 to get $40.",
      options: ["$40", "$39.60", "$38", "$42"], correctIndex: 0, correctValue: "$40",
      explanation: "Original × 1.10 = $44, so original = $44 ÷ 1.10 = $40.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$44', caption: 'after rise' }], edges: ['+10% (×1.10)'] }
    },
    {
      id: 66, prompt: "In a 50% off sale, Alex pays $75 for a game console. What was the ORIGINAL price?",
      hint: "50% off means half price. Multiply 75 by 2 or divide by 0.50 to get $150.",
      options: ["$150", "$125", "$140", "$160"], correctIndex: 0, correctValue: "$150",
      explanation: "Original × 0.50 = $75, so original = $75 ÷ 0.50 = $150.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$75', caption: 'sale price' }], edges: ['−50% (×0.50)'] }
    },
    {
      id: 67, prompt: "After a 40% price rise, a theme park ticket costs $140. What was the price BEFORE the rise?",
      hint: "Multiplier is 1.40. Divide 140 by 1.40 to get the original $100.",
      options: ["$100", "$110", "$98", "$105"], correctIndex: 0, correctValue: "$100",
      explanation: "Original × 1.40 = $140, so original = $140 ÷ 1.40 = $100.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$140', caption: 'after rise' }], edges: ['+40% (×1.40)'] }
    },
    {
      id: 68, prompt: "In a 30% off sale, Sophia pays $140 for a guitar. What was the ORIGINAL price?",
      hint: "30% off leaves 70%, so the multiplier is 0.70. Divide 140 by 0.70 to get $200.",
      options: ["$200", "$180", "$190", "$210"], correctIndex: 0, correctValue: "$200",
      explanation: "Original × 0.70 = $140, so original = $140 ÷ 0.70 = $200.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$140', caption: 'sale price' }], edges: ['−30% (×0.70)'] }
    },
    {
      id: 69, prompt: "In a 10% off sale, Oliver pays $270 for a bicycle. What was the ORIGINAL price?",
      hint: "Multiplier is 0.90. Divide 270 by 0.90 to get the original price of $300.",
      options: ["$300", "$297", "$290", "$310"], correctIndex: 0, correctValue: "$300",
      explanation: "Original × 0.90 = $270, so original = $270 ÷ 0.90 = $300.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$270', caption: 'sale price' }], edges: ['−10% (×0.90)'] }
    },
    {
      id: 70, prompt: "After a 5% tax is added, a bill is $84. What was the price BEFORE tax?",
      hint: "Multiplier is 1.05. Divide 84 by 1.05 to get $80.",
      options: ["$80", "$79.80", "$81", "$78"], correctIndex: 0, correctValue: "$80",
      explanation: "Original × 1.05 = $84, so original = $84 ÷ 1.05 = $80.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$84', caption: 'after tax' }], edges: ['+5% (×1.05)'] }
    }
  ],

  // World 7: Chain Cliffs (Q71–80)
  [
    {
      id: 71, prompt: "A price is increased by 25% and then decreased by 25%. What is the overall percentage change?",
      hint: "Multipliers are 1.25 and 0.75. 1.25 times 0.75 equals 0.9375, which is a 6.25% decrease.",
      options: ["6.25% decrease", "No change", "5% decrease", "6.25% increase"], correctIndex: 0, correctValue: "6.25% decrease",
      explanation: "Multiply the multipliers: 1.25 × 0.75 = 0.9375. That is a 6.25% decrease overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '125%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×1.25', '×0.75'] }
    },
    {
      id: 72, prompt: "A price is increased by 20% and then decreased by 20%. What is the overall percentage change?",
      hint: "1.20 times 0.80 equals 0.96. 1 minus 0.96 is 0.04, which is a 4% decrease.",
      options: ["4% decrease", "No change", "4% increase", "2% decrease"], correctIndex: 0, correctValue: "4% decrease",
      explanation: "Multiply the multipliers: 1.20 × 0.80 = 0.96. That is a 4% decrease overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '120%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×1.20', '×0.80'] }
    },
    {
      id: 73, prompt: "A price is decreased by 10% and then increased by 10%. What is the overall percentage change?",
      hint: "0.90 times 1.10 equals 0.99. That represents a 1% decrease overall.",
      options: ["1% decrease", "No change", "1% increase", "2% decrease"], correctIndex: 0, correctValue: "1% decrease",
      explanation: "0.90 × 1.10 = 0.99. That is a 1% decrease overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '90%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×0.90', '×1.10'] }
    },
    {
      id: 74, prompt: "A price is increased by 10% and then increased by 20%. What is the overall percentage change?",
      hint: "Multiply the multipliers: 1.10 times 1.20 equals 1.32, which is a 32% increase.",
      options: ["32% increase", "30% increase", "31% increase", "28% increase"], correctIndex: 0, correctValue: "32% increase",
      explanation: "1.10 × 1.20 = 1.32. That is a 32% increase overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '110%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×1.10', '×1.20'] }
    },
    {
      id: 75, prompt: "A price is decreased by 20% and then decreased by 10%. What is the overall percentage change?",
      hint: "Multipliers are 0.80 and 0.90. 0.80 times 0.90 equals 0.72, which is a 28% decrease.",
      options: ["28% decrease", "30% decrease", "26% decrease", "25% decrease"], correctIndex: 0, correctValue: "28% decrease",
      explanation: "0.80 × 0.90 = 0.72. That is a 28% decrease overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '80%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×0.80', '×0.90'] }
    },
    {
      id: 76, prompt: "A price increases by 50% and then decreases by 20%. What is the overall percentage change?",
      hint: "1.50 times 0.80 equals 1.20, which represents a 20% increase overall.",
      options: ["20% increase", "30% increase", "15% increase", "No change"], correctIndex: 0, correctValue: "20% increase",
      explanation: "1.50 × 0.80 = 1.20. That is a 20% increase overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '150%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×1.50', '×0.80'] }
    },
    {
      id: 77, prompt: "A price decreases by 50% and then increases by 50%. What is the overall percentage change?",
      hint: "0.50 times 1.50 equals 0.75, which is a 25% decrease from the original.",
      options: ["25% decrease", "No change", "25% increase", "50% decrease"], correctIndex: 0, correctValue: "25% decrease",
      explanation: "0.50 × 1.50 = 0.75. That is a 25% decrease overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '50%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×0.50', '×1.50'] }
    },
    {
      id: 78, prompt: "An item price rises by 10% and then drops by 20%. What is the overall percentage change?",
      hint: "1.10 times 0.80 equals 0.88, which is a 12% decrease overall.",
      options: ["12% decrease", "10% decrease", "14% decrease", "8% decrease"], correctIndex: 0, correctValue: "12% decrease",
      explanation: "1.10 × 0.80 = 0.88. That is a 12% decrease overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '110%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×1.10', '×0.80'] }
    },
    {
      id: 79, prompt: "An item price drops by 20% and then rises by 25%. What is the overall percentage change?",
      hint: "0.80 times 1.25 equals 1.00 exactly, meaning there is no change overall.",
      options: ["No change", "5% increase", "5% decrease", "2% increase"], correctIndex: 0, correctValue: "No change",
      explanation: "0.80 × 1.25 = 1.00. That means there is No change overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '80%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×0.80', '×1.25'] }
    },
    {
      id: 80, prompt: "An item price rises by 40% and then drops by 25%. What is the overall percentage change?",
      hint: "1.40 times 0.75 equals 1.05, which is a 5% increase overall.",
      options: ["5% increase", "15% increase", "No change", "5% decrease"], correctIndex: 0, correctValue: "5% increase",
      explanation: "1.40 × 0.75 = 1.05. That is a 5% increase overall.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '140%', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×1.40', '×0.75'] }
    }
  ],

  // World 8: Compound Cove (Q81–90)
  [
    {
      id: 81, prompt: "Leo invests $500 at 4% compound interest per year. How much is in the account after 2 years?",
      hint: "Multiply 500 by 1.04 squared. 500 times 1.04 times 1.04 equals $540.80.",
      options: ["$540.80", "$540.00", "$535.50", "$542.00"], correctIndex: 0, correctValue: "$540.80",
      explanation: "$500 × 1.04² = $540.80.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$500', caption: 'start' }, { label: '$520', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×1.04', '×1.04'] }
    },
    {
      id: 82, prompt: "Emma invests $1,000 at 5% compound interest per year. How much is in the account after 2 years?",
      hint: "Multiply 1,000 by 1.05 squared. 1,000 times 1.05 times 1.05 equals $1,102.50.",
      options: ["$1,102.50", "$1,100.00", "$1,105.00", "$1,095.00"], correctIndex: 0, correctValue: "$1,102.50",
      explanation: "$1,000 × 1.05² = $1,102.50.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$1,000', caption: 'start' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×1.05', '×1.05'] }
    },
    {
      id: 83, prompt: "Alex invests $2,000 at 10% compound interest per year. How much is in the account after 2 years?",
      hint: "Multiply 2,000 by 1.10 squared. 2,000 times 1.21 equals $2,420.",
      options: ["$2,420", "$2,400", "$2,440", "$2,380"], correctIndex: 0, correctValue: "$2,420",
      explanation: "$2,000 × 1.10² = $2,420.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$2,000', caption: 'start' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×1.10', '×1.10'] }
    },
    {
      id: 84, prompt: "A car bought for $10,000 loses 20% of its value each year. What is it worth after 2 years?",
      hint: "Multiplier is 0.80 each year. 10,000 times 0.80 times 0.80 equals $6,400.",
      options: ["$6,400", "$6,000", "$6,800", "$7,000"], correctIndex: 0, correctValue: "$6,400",
      explanation: "$10,000 × 0.80 × 0.80 = $6,400.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$10k', caption: 'new' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×0.80', '×0.80'] }
    },
    {
      id: 85, prompt: "A motorbike bought for $8,000 depreciates by 10% each year. What is it worth after 2 years?",
      hint: "Multiplier is 0.90 each year. 8,000 times 0.90 squared equals $6,480.",
      options: ["$6,480", "$6,400", "$6,600", "$6,500"], correctIndex: 0, correctValue: "$6,480",
      explanation: "$8,000 × 0.90 × 0.90 = $6,480.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$8k', caption: 'new' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×0.90', '×0.90'] }
    },
    {
      id: 86, prompt: "A computer worth $1,500 depreciates by 20% each year. What is it worth after 2 years?",
      hint: "1,500 times 0.80 times 0.80 equals $960.",
      options: ["$960", "$900", "$1,000", "$950"], correctIndex: 0, correctValue: "$960",
      explanation: "$1,500 × 0.80 × 0.80 = $960.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$1,500', caption: 'new' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×0.80', '×0.80'] }
    },
    {
      id: 87, prompt: "Sophia invests $400 at 5% compound interest per year. How much is in the account after 3 years?",
      hint: "400 times 1.05 cubed. 400 times 1.05 times 1.05 times 1.05 equals $463.05.",
      options: ["$463.05", "$460.00", "$465.00", "$455.50"], correctIndex: 0, correctValue: "$463.05",
      explanation: "$400 × 1.05³ = $463.05.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$400', caption: 'start' }, { label: '…', caption: 'year 1' }, { label: '…', caption: 'year 2' }, { label: '?', caption: 'year 3' }], edges: ['×1.05', '×1.05', '×1.05'] }
    },
    {
      id: 88, prompt: "A machine bought for $12,000 loses 15% of its value each year. What is it worth after 2 years?",
      hint: "Multiplier is 0.85 each year. 12,000 times 0.85 squared equals $8,670.",
      options: ["$8,670", "$8,400", "$8,800", "$8,550"], correctIndex: 0, correctValue: "$8,670",
      explanation: "$12,000 × 0.85 × 0.85 = $8,670.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$12k', caption: 'new' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×0.85', '×0.85'] }
    },
    {
      id: 89, prompt: "Jack invests $800 at 3% compound interest per year. How much is in the account after 2 years?",
      hint: "800 times 1.03 squared equals $848.72.",
      options: ["$848.72", "$848.00", "$850.00", "$846.50"], correctIndex: 0, correctValue: "$848.72",
      explanation: "$800 × 1.03² = $848.72.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$800', caption: 'start' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×1.03', '×1.03'] }
    },
    {
      id: 90, prompt: "A drone bought for $2,000 loses 25% of its value each year. What is it worth after 2 years?",
      hint: "Multiplier is 0.75 each year. 2,000 times 0.75 squared equals $1,125.",
      options: ["$1,125", "$1,000", "$1,200", "$1,150"], correctIndex: 0, correctValue: "$1,125",
      explanation: "$2,000 × 0.75 × 0.75 = $1,125.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '$2k', caption: 'new' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×0.75', '×0.75'] }
    }
  ],

  // World 9: Percent Champion (Q91–100)
  [
    {
      id: 91, prompt: "An antique bought for $500 increases in value by 20%, then drops by 10%. What is its final value?",
      hint: "500 times 1.20 is 600, then 600 times 0.90 equals $540.",
      options: ["$540", "$550", "$530", "$525"], correctIndex: 0, correctValue: "$540",
      explanation: "$500 × 1.20 × 0.90 = $540.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '$500', caption: 'start' }, { label: '$600', caption: 'step 1' }, { label: '?', caption: 'step 2' }], edges: ['×1.20', '×0.90'] }
    },
    {
      id: 92, prompt: "A store offers a 30% discount on a $120 coat, and then adds 10% sales tax. What is the final price?",
      hint: "120 times 0.70 is 84, and 84 times 1.10 equals $92.40.",
      options: ["$92.40", "$94.00", "$90.20", "$96.00"], correctIndex: 0, correctValue: "$92.40",
      explanation: "$120 × 0.70 × 1.10 = $92.40.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '$120', caption: 'start' }, { label: '$84', caption: 'discount' }, { label: '?', caption: 'with tax' }], edges: ['×0.70', '×1.10'] }
    },
    {
      id: 93, prompt: "A concert ticket increases from $50 to $65. What is the percentage increase?",
      hint: "Change is 15. Divide 15 by original 50 to get 0.30, which is a 30% increase.",
      options: ["30% increase", "25% increase", "15% increase", "35% increase"], correctIndex: 0, correctValue: "30% increase",
      explanation: "Change = $15. $15 ÷ $50 × 100 = 30% increase.", rule: RULES.change,
      diagramData: { type: 'tags', before: "$50", after: "$65" }
    },
    {
      id: 94, prompt: "In a 20% off sale, Maya saves $30 on a jacket. What was the ORIGINAL price?",
      hint: "If 20% equals $30, divide 30 by 0.20 to find the original price of $150.",
      options: ["$150", "$120", "$140", "$160"], correctIndex: 0, correctValue: "$150",
      explanation: "20% = $30. Original = $30 ÷ 0.20 = $150.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: 'Saved $30', caption: '20% off' }], edges: ['20% = $30'] }
    },
    {
      id: 95, prompt: "A salary of $2,500 increases by 8%, then increases by 5% the next year. What is the new salary?",
      hint: "2,500 times 1.08 is 2,700, and 2,700 times 1.05 equals $2,835.",
      options: ["$2,835", "$2,825", "$2,800", "$2,850"], correctIndex: 0, correctValue: "$2,835",
      explanation: "$2,500 × 1.08 × 1.05 = $2,835.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '$2,500', caption: 'start' }, { label: '$2,700', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×1.08', '×1.05'] }
    },
    {
      id: 96, prompt: "A TV priced at $600 is reduced by 25%. After one month, the sale price is reduced by a further 10%. What is the final price?",
      hint: "600 times 0.75 is 450, and 450 times 0.90 equals $405.",
      options: ["$405", "$410", "$390", "$420"], correctIndex: 0, correctValue: "$405",
      explanation: "$600 × 0.75 × 0.90 = $405.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '$600', caption: 'start' }, { label: '$450', caption: 'sale 1' }, { label: '?', caption: 'sale 2' }], edges: ['×0.75', '×0.90'] }
    },
    {
      id: 97, prompt: "After a 15% discount, a pair of boots costs $102. What was the original price?",
      hint: "Multiplier is 0.85. Divide 102 by 0.85 to get the original $120.",
      options: ["$120", "$115", "$125", "$118"], correctIndex: 0, correctValue: "$120",
      explanation: "Original × 0.85 = $102, so original = $102 ÷ 0.85 = $120.", rule: RULES.reverse,
      diagramData: { type: 'chain', nodes: [{ label: '?', caption: 'original' }, { label: '$102', caption: 'sale price' }], edges: ['−15% (×0.85)'] }
    },
    {
      id: 98, prompt: "A population of 10,000 grows by 5% each year. What is the population after 2 years?",
      hint: "Multiply 10,000 by 1.05 squared to get 11,025 people.",
      options: ["11,025", "11,000", "11,050", "10,950"], correctIndex: 0, correctValue: "11,025",
      explanation: "10,000 × 1.05² = 11,025.", rule: RULES.compound,
      diagramData: { type: 'chain', nodes: [{ label: '10,000', caption: 'start' }, { label: '…', caption: 'year 1' }, { label: '?', caption: 'year 2' }], edges: ['×1.05', '×1.05'] }
    },
    {
      id: 99, prompt: "An item is discounted by 40%, then discounted by an additional 10%. What is the single equivalent discount?",
      hint: "0.60 times 0.90 is 0.54. 100% minus 54% gives an overall discount of 46%.",
      options: ["46% decrease", "50% decrease", "45% decrease", "48% decrease"], correctIndex: 0, correctValue: "46% decrease",
      explanation: "0.60 × 0.90 = 0.54. 100% − 54% = 46% decrease.", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '100%', caption: 'start' }, { label: '60%', caption: 'discount 1' }, { label: '?', caption: 'discount 2' }], edges: ['×0.60', '×0.90'] }
    },
    {
      id: 100, prompt: "Leo's jacket started at $80, went up by 25% to $100, then down by 25% to $75. What overall percentage change occurred?",
      hint: "Overall multiplier is 1.25 times 0.75 which equals 0.9375. That is a 6.25% decrease from the original $80!",
      options: ["6.25% decrease", "No change", "5% decrease", "6.25% increase"], correctIndex: 0, correctValue: "6.25% decrease",
      explanation: "$80 × 1.25 × 0.75 = $75. Overall change is a 6.25% decrease!", rule: RULES.chain,
      diagramData: { type: 'chain', nodes: [{ label: '$80', caption: 'start' }, { label: '$100', caption: '+25%' }, { label: '$75', caption: '−25%' }], edges: ['×1.25', '×0.75'] }
    }
  ]
];

export function getQuestion(worldIndex = 0, qIndex = 0) {
  const worldQs = PRACTICE_QUESTIONS[worldIndex] || PRACTICE_QUESTIONS[0];
  const q = worldQs[qIndex] || worldQs[0];
  return {
    ...q,
    world: PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0]
  };
}

export function makeQuestion(worldIndex = 0, qIndex = 0) {
  return getQuestion(worldIndex, qIndex);
}
