# Mushee Yellow Pay Rebuild

- Polygon mainnet wallet connect
- USDC send flow
- payment links panel
- treasury dashboard
- native YELLOW unlock dashboard

## Env

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=d41d61dc950b0c624c8485e185ba6a82
NEXT_PUBLIC_POLYGON_RPC_URL=https://polygon-rpc.com
NEXT_PUBLIC_MUSHEE_TREASURY_ADDRESS=0xD39De9c7A852252863F5f9C1FA32E97472230fd4
```

## Notes

- Polygon USDC token is wired in `lib/config.ts`
- Wallet connect uses injected, Coinbase Wallet, and WalletConnect
- Unlock data is rendered natively from `lib/config.ts`
