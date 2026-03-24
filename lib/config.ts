export const MUSHEE_TREASURY = process.env.NEXT_PUBLIC_MUSHEE_TREASURY_ADDRESS || "0xD39De9c7A852252863F5f9C1FA32E97472230fd4";
export const POLYGON_USDC = "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359" as const;

export const TOOL_PRICING = {
  payment: { label: "Direct payment", price: "0.005" },
  paylink: { label: "Payment link", price: "0.010" },
  treasury: { label: "Treasury action", price: "0.015" },
  unlocks: { label: "Unlock insight", price: "0.010" },
} as const;

export const YELLOW_UNLOCKS = {
  percentUnlocked: 34,
  unlocked: "3.4B YELLOW",
  locked: "6.6B YELLOW",
  fullyDilutedSupply: "10B YELLOW",
  estimatedUnlockedValue: "$204.0M",
  circulatingView: "Treasury-grade unlock monitor",
  nextUnlock: {
    date: "Apr 18, 2026",
    amount: "140M YELLOW",
    usdValue: "$8.4M",
    shareOfSupply: "1.4% of max supply",
    category: "Treasury release",
  },
  categories: [
    { name: "Treasury", share: 28, amount: "2.8B", color: "from-[#ffd54f] via-[#ffec99] to-[#fff8d1]" },
    { name: "Ecosystem", share: 24, amount: "2.4B", color: "from-[#f4c430] via-[#ffe07a] to-[#fff3c4]" },
    { name: "Contributors", share: 18, amount: "1.8B", color: "from-[#e8b923] via-[#f7d768] to-[#fff0ad]" },
    { name: "Partnerships", share: 15, amount: "1.5B", color: "from-[#dca10d] via-[#f3cb54] to-[#ffeaa1]" },
    { name: "Liquidity", share: 15, amount: "1.5B", color: "from-[#c58f08] via-[#efc44b] to-[#ffe390]" },
  ],
  timeline: [
    { date: "Apr 18, 2026", category: "Treasury release", amount: "140M YELLOW", usdValue: "$8.4M", progress: 62 },
    { date: "May 18, 2026", category: "Ecosystem incentives", amount: "95M YELLOW", usdValue: "$5.7M", progress: 76 },
    { date: "Jun 18, 2026", category: "Core contributors", amount: "70M YELLOW", usdValue: "$4.2M", progress: 84 },
    { date: "Jul 18, 2026", category: "Partnership reserve", amount: "55M YELLOW", usdValue: "$3.3M", progress: 92 },
  ],
} as const;

export type ToolKey = keyof typeof TOOL_PRICING;
