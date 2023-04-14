"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from "@zerodevapp/wagmi/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

function RainbowKitExample() {
  const defaultProjectId = "5c5ce7cb-9231-4ffc-9792-a58f27f43c13";
  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({ options: { projectId: defaultProjectId } }),
        facebookWallet({ options: { projectId: defaultProjectId } }),
        githubWallet({ options: { projectId: defaultProjectId } }),
        discordWallet({ options: { projectId: defaultProjectId } }),
        twitchWallet({ options: { projectId: defaultProjectId } }),
        twitterWallet({ options: { projectId: defaultProjectId } }),
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize={"compact"}>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default RainbowKitExample;