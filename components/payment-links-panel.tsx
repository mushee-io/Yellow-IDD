export function PaymentLinksPanel() {
  const links = [
    { title: "Premium consultation", amount: "150 USDC", state: "Active" },
    { title: "Merchant onboarding", amount: "480 USDC", state: "Draft" },
    { title: "Enterprise treasury review", amount: "1,250 USDC", state: "Shared" },
  ];

  return (
    <div className="surface-card rounded-[34px] p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-semibold tracking-tight text-ink">Payment links</div>
          <div className="text-sm text-muted">A cleaner pay-link surface for Yellow Pay users and merchants.</div>
        </div>
        <button className="button-secondary px-3 py-2 text-xs">Create link</button>
      </div>
      <div className="mt-5 space-y-3">
        {links.map((link) => (
          <div key={link.title} className="flex items-center justify-between rounded-[24px] border border-edge bg-white/85 px-4 py-4 text-sm">
            <div>
              <div className="font-medium text-ink">{link.title}</div>
              <div className="text-muted">{link.amount}</div>
            </div>
            <div className="pill">{link.state}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
