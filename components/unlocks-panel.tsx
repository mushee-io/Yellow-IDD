import { YELLOW_UNLOCKS } from "@/lib/config";

function metricCard(label: string, value: string, sub: string) {
  return (
    <div className="rounded-[26px] border border-edge bg-white/90 p-4 shadow-[0_18px_44px_rgba(91,74,15,0.06)]">
      <div className="text-[11px] uppercase tracking-[0.22em] text-muted">{label}</div>
      <div className="mt-2 text-xl font-semibold tracking-tight text-ink">{value}</div>
      <div className="mt-1 text-sm text-muted">{sub}</div>
    </div>
  );
}

export function UnlocksPanel({ compact = false }: { compact?: boolean }) {
  const ring = `conic-gradient(#f3c73b 0 ${YELLOW_UNLOCKS.percentUnlocked}%, #f6edc3 ${YELLOW_UNLOCKS.percentUnlocked}% 100%)`;

  return (
    <div className={`surface-card ${compact ? "rounded-[32px] p-5" : "rounded-[36px] p-6"}`} id="unlock">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-lg font-semibold tracking-tight text-ink">YELLOW unlocks</div>
          <div className="mt-1 text-sm text-muted">A treasury-grade unlock view built directly into the wallet surface.</div>
        </div>
        <div className="pill">{YELLOW_UNLOCKS.percentUnlocked}% unlocked</div>
      </div>

      <div className={`mt-6 grid gap-5 ${compact ? "" : "xl:grid-cols-[1.1fr_0.9fr]"}`}>
        <div className="rounded-[30px] border border-edge bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,250,232,0.92))] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted">Unlock command center</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-ink">Next release: {YELLOW_UNLOCKS.nextUnlock.amount}</div>
              <div className="mt-2 text-sm text-muted">
                {YELLOW_UNLOCKS.nextUnlock.date} · {YELLOW_UNLOCKS.nextUnlock.category} · {YELLOW_UNLOCKS.nextUnlock.shareOfSupply}
              </div>
            </div>
            <div className="relative h-28 w-28 shrink-0">
              <div className="absolute inset-0 rounded-full" style={{ background: ring }} />
              <div className="absolute inset-[10px] flex items-center justify-center rounded-full bg-[#fffdf3] shadow-inner">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-ink">{YELLOW_UNLOCKS.percentUnlocked}%</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted">Released</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#f6edc3]">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#efc22c,#ffd957,#fff0ae)] shadow-[0_10px_24px_rgba(224,182,35,0.24)]"
              style={{ width: `${YELLOW_UNLOCKS.percentUnlocked}%` }}
            />
          </div>

          <div className={`mt-5 grid gap-3 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
            {metricCard("Unlocked", YELLOW_UNLOCKS.unlocked, `${YELLOW_UNLOCKS.estimatedUnlockedValue} est. unlocked value`)}
            {metricCard("Locked", YELLOW_UNLOCKS.locked, "Still vesting across treasury, contributors, and ecosystem buckets")}
            {!compact ? metricCard("FDV supply", YELLOW_UNLOCKS.fullyDilutedSupply, YELLOW_UNLOCKS.circulatingView) : null}
          </div>
        </div>

        <div className="rounded-[30px] border border-edge bg-white/92 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted">Allocation map</div>
              <div className="mt-2 text-xl font-semibold tracking-tight text-ink">Distribution by major bucket</div>
            </div>
            <div className="text-sm text-muted">10B max supply</div>
          </div>

          <div className="mt-5 space-y-4">
            {YELLOW_UNLOCKS.categories.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <div className="font-medium text-ink">{item.name}</div>
                  <div className="text-muted">{item.amount} · {item.share}%</div>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#f7efcb]">
                  <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.share}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!compact ? (
        <div className="mt-6 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-edge bg-white/92 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted">Unlock timeline</div>
                <div className="mt-2 text-xl font-semibold tracking-tight text-ink">Upcoming vesting cadence</div>
              </div>
              <div className="text-sm text-muted">4 scheduled windows</div>
            </div>

            <div className="mt-5 space-y-4">
              {YELLOW_UNLOCKS.timeline.map((item, index) => (
                <div key={`${item.date}-${item.category}`} className="relative rounded-[24px] border border-edge bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,250,235,0.88))] p-4">
                  {index !== YELLOW_UNLOCKS.timeline.length - 1 ? (
                    <div className="absolute left-[27px] top-[56px] h-[calc(100%+8px)] w-px bg-[linear-gradient(180deg,rgba(240,196,25,0.5),rgba(240,196,25,0))]" />
                  ) : null}
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f0c419] ring-4 ring-[#fff5ca]" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="font-semibold text-ink">{item.category}</div>
                          <div className="text-sm text-muted">{item.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-[#8b6500]">{item.amount}</div>
                          <div className="text-sm text-muted">{item.usdValue}</div>
                        </div>
                      </div>
                      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#f7efcb]">
                        <div className="h-full rounded-full bg-[linear-gradient(90deg,#efc22c,#ffd957,#fff0ae)]" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-edge bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,249,228,0.94))] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Treasury lens</div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-ink">Why the unlocks surface matters</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
              <p>
                Yellow Pay should not send users away for token intelligence. The unlock monitor gives treasury context, dilution visibility,
                and a cleaner picture of what enters circulation next.
              </p>
              <p>
                For founder decks and investor demos, this turns the wallet into a stronger financial operating surface instead of a plain send-and-receive screen.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-[22px] border border-edge bg-white/92 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">Next unlock value</div>
                <div className="mt-1 text-lg font-semibold text-ink">{YELLOW_UNLOCKS.nextUnlock.usdValue}</div>
              </div>
              <div className="rounded-[22px] border border-edge bg-white/92 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">Current lens</div>
                <div className="mt-1 text-lg font-semibold text-ink">{YELLOW_UNLOCKS.circulatingView}</div>
              </div>
              <div className="rounded-[22px] border border-edge bg-white/92 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">Design goal</div>
                <div className="mt-1 text-lg font-semibold text-ink">Investor-grade wallet storytelling</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
