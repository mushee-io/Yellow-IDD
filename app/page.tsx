import Link from "next/link";
import { TOOL_PRICING, YELLOW_UNLOCKS } from "@/lib/config";

const pillars = [
  "Wallet-native payments with Polygon USDC",
  "Premium payment links, QR receive, and treasury surfaces",
  "Yellow unlock visibility built directly into the wallet experience",
  "Mainnet-oriented dashboard built for demos, grants, and investor review",
];

const highlights = [
  {
    label: "Assets routed",
    value: "$1.24M",
    sub: "demo treasury volume",
  },
  {
    label: "Instant payouts",
    value: "2.4s",
    sub: "average confirmation surface",
  },
  {
    label: "Unlock visibility",
    value: `${YELLOW_UNLOCKS.percentUnlocked}%`,
    sub: "released supply tracked",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ink">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="grid-overlay" />

      <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
        <header className="nav-shell sticky top-4 z-30 flex items-center justify-between rounded-[30px] px-5 py-4">
          <div className="flex items-center gap-4">
            <div className="logo-shell">
              <span className="logo-mark">M</span>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Mushee</div>
              <div className="text-sm text-muted">Yellow Pay · premium treasury wallet</div>
            </div>
          </div>

          <div className="hidden items-center gap-3 text-sm md:flex">
            <a className="nav-link" href="#product">Product</a>
            <a className="nav-link" href="#unlock">Unlocks</a>
            <a className="nav-link" href="#pricing">Pricing</a>
            <Link className="button-secondary" href="/wallet">Open Wallet</Link>
            <Link className="button-primary" href="/dashboard">Open Dashboard</Link>
          </div>
        </header>

        <section className="relative grid gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <div className="pill">Mushee × Yellow Pay · Polygon mainnet wallet</div>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              The premium wallet surface for
              <span className="text-gradient"> Yellow payments, treasury, and unlock intelligence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Yellow Pay is rebuilt as a cleaner, wealthier, more investor-ready payment product. It gives you a polished pre-launch page,
              a beautiful main wallet, QR receive flows, and a native unlock intelligence layer for YELLOW inside the dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/wallet" className="button-primary">Launch Yellow Pay</Link>
              <Link href="/dashboard" className="button-secondary">See treasury dashboard</Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {pillars.map((feature) => (
                <div key={feature} className="soft-card rounded-[28px] px-4 py-4 text-sm text-muted">
                  <div className="mb-3 h-2 w-2 rounded-full bg-accent" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card relative overflow-hidden rounded-[40px] p-6 sm:p-8">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-muted">Yellow Pay wallet preview</div>
                <div className="mt-1 text-2xl font-semibold tracking-tight">One elegant payment home</div>
              </div>
              <div className="pill">Mainnet ready</div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="soft-card rounded-[28px] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted">{item.label}</div>
                  <div className="mt-3 text-3xl font-semibold">{item.value}</div>
                  <div className="mt-2 text-sm text-muted">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.88fr]">
              <div className="soft-card rounded-[30px] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-muted">Wallet overview</div>
                    <div className="mt-1 text-xl font-semibold">Spend, receive, settle</div>
                  </div>
                  <div className="rounded-full bg-white px-3 py-1 text-xs text-muted shadow-soft">Polygon USDC</div>
                </div>
                <div className="mt-5 rounded-[28px] border border-edge bg-[linear-gradient(135deg,#fff9d6,#fffef6)] p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted">Available balance</div>
                      <div className="mt-3 text-4xl font-semibold tracking-tight">8,420.44</div>
                    </div>
                    <div className="rounded-[24px] border border-edge bg-white px-4 py-3 text-sm">
                      +12.4% this month
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[22px] border border-edge bg-white/90 p-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-muted">QR receive</div>
                      <div className="mt-2 text-lg font-semibold">Live links</div>
                    </div>
                    <div className="rounded-[22px] border border-edge bg-white/90 p-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-muted">Payment links</div>
                      <div className="mt-2 text-lg font-semibold">12 active</div>
                    </div>
                    <div className="rounded-[22px] border border-edge bg-white/90 p-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-muted">Yellow unlock</div>
                      <div className="mt-2 text-lg font-semibold">Next in 11d</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="soft-card rounded-[30px] p-5">
                <div className="text-sm font-medium text-muted">Product stack</div>
                <div className="mt-4 space-y-3">
                  {[
                    ["Wallet", "Balances, assets, treasury visibility"],
                    ["Pay", "Direct send, QR receive, payment links"],
                    ["Unlocks", "Token release schedule and treasury insight"],
                    ["Analytics", "Volumes, flows, merchant conversion"],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-center justify-between rounded-[24px] border border-edge bg-white/90 px-4 py-3 text-sm">
                      <div>
                        <div className="font-medium text-ink">{title}</div>
                        <div className="text-muted">{desc}</div>
                      </div>
                      <div className="text-accent">Live</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="grid gap-4 py-6 md:grid-cols-3">
          {[
            ["Premium first impression", "A lighter, wealthier interface with softer depth, brighter surfaces, and less clutter across every section."],
            ["Wallet rebuilt", "The wallet now behaves like the center of the product instead of a side panel, with balances, receive, send, and unlocks."],
            ["Investor narrative", "Yellow Pay now explains why it matters: payment rails, treasury control, unlock visibility, and ecosystem readiness."],
          ].map(([title, desc]) => (
            <div key={title} className="soft-card rounded-[30px] p-6">
              <div className="text-lg font-semibold tracking-tight">{title}</div>
              <p className="mt-3 text-sm leading-7 text-muted">{desc}</p>
            </div>
          ))}
        </section>

        <section id="unlock" className="py-12 sm:py-16">
          <div className="mb-6 max-w-3xl">
            <div className="pill">Yellow unlock intelligence</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Bring YELLOW unlocks directly into the wallet.</h2>
            <p className="mt-3 text-base leading-7 text-muted">
              Instead of sending users away to another site, the wallet now gives a native unlock overview: next unlock date, released supply, timeline,
              and treasury visibility. This is cleaner for users and stronger for investor demos.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="surface-card rounded-[34px] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-muted">Next unlock</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">{YELLOW_UNLOCKS.nextUnlock.date}</div>
                </div>
                <div className="rounded-[24px] border border-edge bg-white px-4 py-3 text-sm shadow-soft">
                  {YELLOW_UNLOCKS.nextUnlock.amount}
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-[28px] border border-edge bg-white/85">
                {YELLOW_UNLOCKS.timeline.map((item) => (
                  <div key={`${item.date}-${item.category}`} className="flex items-center justify-between border-b border-edge/60 px-5 py-4 last:border-b-0">
                    <div>
                      <div className="font-medium text-ink">{item.category}</div>
                      <div className="text-sm text-muted">{item.date}</div>
                    </div>
                    <div className="text-sm font-semibold text-accent">{item.amount}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-card rounded-[34px] p-6">
              <div className="text-sm text-muted">Supply progress</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">{YELLOW_UNLOCKS.percentUnlocked}% unlocked</div>
              <div className="mt-5 h-4 overflow-hidden rounded-full bg-[#f2ecc4]">
                <div className="h-full rounded-full bg-[linear-gradient(90deg,#f0c419,#ffd84f,#fff09f)]" style={{ width: `${YELLOW_UNLOCKS.percentUnlocked}%` }} />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="soft-card rounded-[24px] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted">Unlocked supply</div>
                  <div className="mt-2 text-2xl font-semibold">{YELLOW_UNLOCKS.unlocked}</div>
                </div>
                <div className="soft-card rounded-[24px] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted">Locked supply</div>
                  <div className="mt-2 text-2xl font-semibold">{YELLOW_UNLOCKS.locked}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 sm:py-16">
          <div className="mb-6 max-w-3xl">
            <div className="pill">Monetization surfaces</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Every payment product in one cleaner system.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {Object.entries(TOOL_PRICING).map(([key, value]) => (
              <div key={key} className="soft-card rounded-[30px] p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-muted">{key}</div>
                <div className="mt-3 text-2xl font-semibold">{value.label}</div>
                <div className="mt-4 text-sm leading-7 text-muted">For premium demos, pay links, treasury actions, or API monetization inside Yellow Pay.</div>
                <div className="mt-6 text-xl font-semibold text-accent">{value.price} USDC</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
