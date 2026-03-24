import Link from "next/link";

const nav = [
  { label: "Overview", href: "/dashboard" },
  { label: "Wallet", href: "/wallet" },
  { label: "Payments", href: "/dashboard" },
  { label: "Unlocks", href: "/dashboard#unlock" },
  { label: "Treasury", href: "/dashboard" },
  { label: "Settings", href: "/dashboard" },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-[290px] shrink-0 p-5 lg:block">
      <div className="nav-shell sticky top-5 rounded-[34px] p-5">
        <div className="flex items-center gap-4">
          <div className="logo-shell">
            <span className="logo-mark">M</span>
          </div>
          <div>
            <div className="text-xl font-semibold tracking-tight">Mushee</div>
            <div className="mt-1 text-sm leading-6 text-muted">Yellow Pay premium wallet and treasury surfaces.</div>
          </div>
        </div>

        <nav className="mt-8 space-y-2">
          {nav.map((item, idx) => (
            <Link
              href={item.href}
              key={item.label}
              className={`block rounded-2xl px-4 py-3 text-sm transition ${idx === 0 ? "bg-[linear-gradient(135deg,rgba(255,225,87,0.24),rgba(255,248,191,0.56))] text-ink shadow-soft" : "text-muted hover:bg-white/80 hover:text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-[28px] border border-edge bg-white/80 p-4 text-sm text-muted">
          <div className="text-xs uppercase tracking-[0.18em] text-muted">Live mode</div>
          <div className="mt-3 font-medium text-ink">Polygon USDC + Yellow unlock intelligence</div>
          <div className="mt-2 leading-6">Built for wallet sends, treasury monitoring, payment links, and investor-grade product demos.</div>
        </div>
      </div>
    </aside>
  );
}
