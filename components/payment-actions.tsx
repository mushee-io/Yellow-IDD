"use client";

export function PaymentActions({
  amount,
  setAmount,
  recipient,
  setRecipient,
  note,
  setNote,
  onSend,
  sending,
  error,
}: {
  amount: string;
  setAmount: (value: string) => void;
  recipient: string;
  setRecipient: (value: string) => void;
  note: string;
  setNote: (value: string) => void;
  onSend: () => void;
  sending: boolean;
  error?: string;
}) {
  return (
    <section className="surface-card rounded-[36px] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xl font-semibold tracking-tight text-ink">Send a payment</div>
          <div className="mt-1 text-sm text-muted">Move USDC on Polygon from the wallet, with a cleaner product flow around it.</div>
        </div>
        <div className="rounded-full bg-white px-3 py-1 text-xs text-muted shadow-soft">Wallet-native send</div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.65fr_1fr]">
        <div className="rounded-[30px] border border-edge bg-[linear-gradient(135deg,#fff7d0,#fffef8)] p-5">
          <div className="text-xs uppercase tracking-[0.18em] text-muted">Quick actions</div>
          <div className="mt-4 grid gap-3">
            {[
              ["Merchant payout", "48.00"],
              ["Supplier settlement", "125.00"],
              ["Treasury top-up", "500.00"],
            ].map(([label, value]) => (
              <button key={label} onClick={() => setAmount(value)} className="rounded-[22px] border border-edge bg-white px-4 py-3 text-left text-sm hover:bg-[#fffdf4]">
                <div className="font-medium text-ink">{label}</div>
                <div className="text-muted">{value} USDC preset</div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-edge bg-white/85 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <div className="mb-2 text-muted">Amount</div>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} className="input-shell" placeholder="25.00" />
            </label>
            <label className="block text-sm">
              <div className="mb-2 text-muted">Internal note</div>
              <input value={note} onChange={(e) => setNote(e.target.value)} className="input-shell" placeholder="Merchant settlement" />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <div className="mb-2 text-muted">Recipient wallet</div>
            <input value={recipient} onChange={(e) => setRecipient(e.target.value)} className="input-shell" placeholder="0x..." />
          </label>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-muted">Polygon mainnet · USDC transfer</div>
            <button type="button" onClick={onSend} disabled={sending} className="button-primary disabled:opacity-60">
              {sending ? "Processing..." : "Send with Yellow Pay"}
            </button>
          </div>
          {error ? <div className="mt-3 text-sm text-rose-500">{error}</div> : null}
        </div>
      </div>
    </section>
  );
}
