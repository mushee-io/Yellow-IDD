import { WalletPanel } from "@/components/wallet-panel";
import { UnlocksPanel } from "@/components/unlocks-panel";
import { PaymentLinksPanel } from "@/components/payment-links-panel";

export default function WalletPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-8 sm:px-6 lg:px-8">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="relative mx-auto max-w-6xl space-y-6">
        <div className="surface-card rounded-[38px] p-6 sm:p-8">
          <div className="pill">Yellow Pay wallet</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Your premium balance, payments, and unlock view.</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            This standalone wallet page gives you the cleanest version of the product: connect, inspect balances, copy receive links, and review YELLOW unlock progress.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <WalletPanel />
          <UnlocksPanel compact={false} />
        </div>
        <PaymentLinksPanel />
      </div>
    </main>
  );
}
