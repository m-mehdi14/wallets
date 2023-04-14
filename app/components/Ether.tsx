"use client";

import { getZeroDevSigner, getRPCProviderOwner } from "@zerodevapp/sdk";
import { useState } from "react";

function RpcProviderExample() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const createWallet = async () => {
    setLoading(true);
    try {
         //@ts-ignore
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const signer = await getZeroDevSigner({
        projectId: "5c5ce7cb-9231-4ffc-9792-a58f27f43c13",
        owner: getRPCProviderOwner(window.ethereum),
      });
      setAddress(await signer.getAddress());
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <button
          onClick={createWallet}
          className="  flex flex-col items-center border-1 bg-cyan-800 border-blue-300 px-3 py-2 rounded-xl  font-medium text-white hover:scale-105"
          disabled={loading}
        >
          {loading ? "loading..." : "Create Wallet"}
        </button>
      </div>
      {address && (
        <div>
          <label className=" text-white">Wallet: {address}</label>
        </div>
      )}
    </div>
  );
}
export default RpcProviderExample;