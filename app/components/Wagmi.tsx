"use client";
import { useState } from "react";
import {
  // GoogleSocialWalletConnector,
  // FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  // DiscordSocialWalletConnector,
  // TwitchSocialWalletConnector,
  // TwitterSocialWalletConnector,
  // ZeroDevConnector,
} from "@zerodevapp/wagmi";
import { configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { createClient } from "wagmi";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  WagmiConfig,
} from "wagmi";

const WagmiExample = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
  });

  const ConnectButton = () => {
    const [loading, setLoading] = useState(false);
    const { connect, error, isLoading, pendingConnector } = useConnect();
    const { address, connector, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();

    const connectWallet = async () => {
      setLoading(true);
      await connect({
        connector: new GithubSocialWalletConnector({
          options: {
            projectId: "5c5ce7cb-9231-4ffc-9792-a58f27f43c13",
          },
        }),
      });
      setLoading(false);
    };

    if (isConnected) {
      return (
        <div>
          <div>{address}</div>
          <div>Connected to {connector?.name}</div>
          <div className="flex space-x-5 justify-center pt-2">
            <a
              href={`${chain?.blockExplorers?.default.url}/address/${address}`}
              target="_blank"
              className="bg-green-800 rounded-md shadow-sm text-white py-1 px-3 font-normal hover:scale-105"
            >
              Explorer
            </a>
            <br />
            <button
              onClick={() => {
                disconnect();
              }}
              className="bg-red-800 rounded-md shadow-sm text-white py-1 px-2 font-normal"
            >
              Disconnect
            </button>
          </div>
        </div>
      );
    }
    return (
      <button
        disabled={isLoading || loading}
        onClick={connectWallet}
        className="bg-blue-800 rounded-md shadow-sm text-white py-2 px-4 font-medium"
      >
        {isLoading || loading ? "loading..." : "Connect to GitHub"}
      </button>
    );
  };

  return (
    <WagmiConfig client={client}>
      <ConnectButton />
    </WagmiConfig>
  );
};
export default WagmiExample;