export function TreasuryPanel() {
  const cards = [
    ["Merchant vault", "$482,400", "Available for payouts"],
    ["Settlement buffer", "$96,200", "Reserved liquidity"],
    ["Pending releases", "14", "Queued merchant movements"],
  ];

  return (
    <div className="surface-card rounded-[34px] p-6">
      <div className="text-lg font-semibold tracking-tight text-ink">Treasury control</div>
      <div className="mt-2 text-sm leading-6 text-muted">A cleaner investor-facing view of how Yellow Pay manages treasury, liquidity, and merchant settlement readiness.</div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {cards.map(([label, value, sub]) => (
          <div key={label} className="rounded-[24px] border border-edge bg-white/85 p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">{label}</div>
            <div className="mt-2 text-2xl font-semibold">{value}</div>
            <div className="mt-1 text-sm text-muted">{sub}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-[28px] border border-edge bg-[linear-gradient(135deg,#fff7d0,#ffffff)] p-5">
        <div className="text-sm font-medium text-ink">Why this matters</div>
        <p className="mt-2 text-sm leading-7 text-muted">
          Yellow Pay now explains treasury clearly: incoming funds, outbound releases, liquidity buffers, and token unlock visibility all sit in one premium control surface.
        </p>
      </div>
    </div>
  );
}
