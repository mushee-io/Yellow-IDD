"use client";

import { useMemo, useState } from "react";
import { erc20Abi, formatUnits, parseUnits } from "viem";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Sidebar } from "@/components/sidebar";
import { TopStats } from "@/components/top-stats";
import { ActivityItem, ActivityPanel } from "@/components/activity-panel";
import { WalletPanel } from "@/components/wallet-panel";
import { UnlocksPanel } from "@/components/unlocks-panel";
import { TreasuryPanel } from "@/components/treasury-panel";
import { PaymentActions } from "@/components/payment-actions";
import { PaymentLinksPanel } from "@/components/payment-links-panel";
import { MUSHEE_TREASURY, POLYGON_USDC } from "@/lib/config";

export default function DashboardPage() {
  const [amount, setAmount] = useState("25.00");
  const [recipient, setRecipient] = useState(MUSHEE_TREASURY);
  const [note, setNote] = useState("Merchant settlement");
  const [error, setError] = useState("");
  const [items, setItems] = useState<ActivityItem[]>([]);
  const { address, isConnected } = useAccount();
  const { writeContractAsync, data: hash } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({ hash });

  const usdcBalance = useReadContract({
    address: POLYGON_USDC,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const balanceNum = typeof usdcBalance.data === "bigint" ? Number(formatUnits(usdcBalance.data, 6)) : 0;
  const spentToday = items.reduce((sum, item) => sum + Number(item.amount), 0).toFixed(2);

  async function handleSend() {
    setError("");
    if (!isConnected || !address) {
      setError("Connect your wallet first.");
      return;
    }
    if (!recipient.startsWith("0x") || recipient.length < 10) {
      setError("Enter a valid recipient wallet.");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setError("Enter a valid USDC amount.");
      return;
    }
    if (balanceNum < Number(amount)) {
      setError("Not enough USDC in the connected wallet.");
      return;
    }

    try {
      const txHash = await writeContractAsync({
        address: POLYGON_USDC,
        abi: erc20Abi,
        functionName: "transfer",
        args: [recipient as `0x${string}`, parseUnits(amount, 6)],
      });

      const entry: ActivityItem = {
        id: `${Date.now()}`,
        tool: note || "USDC transfer",
        amount,
        txHash,
        status: "Pending confirmation",
        time: new Date().toLocaleTimeString(),
      };
      setItems((prev) => [entry, ...prev].slice(0, 10));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Transfer failed.");
    }
  }

  const statusText = useMemo(() => {
    if (receipt.isLoading) return "Waiting for Polygon confirmation";
    if (receipt.isSuccess) return "Latest transfer confirmed on Polygon";
    return "Ready for send, receive, unlock tracking, and treasury visibility";
  }, [receipt.isLoading, receipt.isSuccess]);

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="mx-auto flex w-full max-w-[1750px] flex-1 gap-6 px-4 py-5 sm:px-6 xl:px-8">
        <main className="min-w-0 flex-1 space-y-6 py-2">
          <section className="surface-card relative overflow-hidden rounded-[38px] p-6 sm:p-8">
            <div className="absolute right-0 top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,211,64,0.26),transparent_68%)] blur-3xl" />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="pill">Yellow Pay treasury workspace</div>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  The premium wallet dashboard for send, receive, unlocks, and treasury control.
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                  This rebuild puts Yellow Pay in its proper shape: balances, payment actions, QR receive, unlock schedule visibility, and cleaner treasury movement on Polygon mainnet.
                </p>
              </div>
              <div className="soft-card rounded-[28px] px-4 py-3 text-sm text-muted">{statusText}</div>
            </div>
          </section>

          <TopStats balance={balanceNum.toFixed(2)} spent={spentToday} requests={items.length} />

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-6">
              <PaymentActions
                amount={amount}
                setAmount={setAmount}
                recipient={recipient}
                setRecipient={setRecipient}
                note={note}
                setNote={setNote}
                onSend={handleSend}
                sending={receipt.isLoading}
                error={error}
              />
              <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
                <TreasuryPanel />
                <PaymentLinksPanel />
              </div>
              <UnlocksPanel compact={false} />
            </div>
            <aside className="space-y-6">
              <WalletPanel />
              <ActivityPanel items={items} />
              <UnlocksPanel compact />
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
