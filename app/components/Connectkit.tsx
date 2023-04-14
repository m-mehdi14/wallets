"use client";
import { supportedSocialConnectors } from "@zerodevapp/wagmi/connectkit";
import { supportedConnectors } from "connectkit";
supportedConnectors.push(...supportedSocialConnectors);

import {
  GoogleSocialWalletConnector,
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from "@zerodevapp/wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { polygonMumbai } from "wagmi/chains";
import { createClient } from "wagmi";
import { WagmiConfig } from "wagmi";
import {
  getDefaultClient,
  ConnectKitProvider,
  ConnectKitButton,
} from "connectkit";

function ConnectKitExample() {
  const options = {
    options: { projectId: "5c5ce7cb-9231-4ffc-9792-a58f27f43c13" },
  };

  const client = createClient(
    getDefaultClient({
      appName: "Your App Name",
      chains: [polygonMumbai],
      connectors: [
        new GoogleSocialWalletConnector(options),
        new FacebookSocialWalletConnector(options),
        new GithubSocialWalletConnector(options),
        new DiscordSocialWalletConnector(options),
        new TwitchSocialWalletConnector(options),
        new TwitterSocialWalletConnector(options),
        new MetaMaskConnector(),
      ],
      autoConnect: false,
    })
  );

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
export default ConnectKitExample;