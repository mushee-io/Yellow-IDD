import { createConfig, fallback, http } from "wagmi";
import { injected, coinbaseWallet, walletConnect } from "wagmi/connectors";
import { polygon } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "d41d61dc950b0c624c8485e185ba6a82";

export const wagmiConfig = createConfig({
  chains: [polygon],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Mushee Yellow Pay" }),
    walletConnect({
      projectId,
      metadata: {
        name: "Mushee Yellow Pay",
        description: "Premium Yellow Pay wallet and treasury dashboard",
        url: "https://mushee.xyz",
        icons: ["https://mushee.xyz/favicon.ico"],
      },
      showQrModal: true,
    }),
  ],
  transports: {
    [polygon.id]: fallback([
      http(process.env.NEXT_PUBLIC_POLYGON_RPC_URL || "https://polygon-rpc.com"),
      http("https://polygon-bor-rpc.publicnode.com"),
      http("https://1rpc.io/matic"),
    ]),
  },
  ssr: false,
});
