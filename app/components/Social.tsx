"use client"
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk'

import { 
  SocialWallet, 
  GoogleSocialWallet, 
  FacebookSocialWallet,
  GithubSocialWallet,
  DiscordSocialWallet,
  TwitchSocialWallet,
  TwitterSocialWallet
} from '@zerodevapp/social-wallet';
import { useMemo, useState } from 'react';

function RpcProviderExample() {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const socialWallet = useMemo(() => {
    return new SocialWallet()
  }, [])
  
  const createWallet = async () => {
    setLoading(true)
    const signer = await getZeroDevSigner({
      projectId: "5c5ce7cb-9231-4ffc-9792-a58f27f43c13",
      owner: await getSocialWalletOwner("5c5ce7cb-9231-4ffc-9792-a58f27f43c13", socialWallet)
    })
    setAddress(await signer.getAddress())
    setLoading(false)
  }

  const disconnect = async () => {
    await socialWallet.disconnect()
    setAddress('')
  }

  const connected = !!address

  return (
    <div>
      {connected && 
        <div>
          <label>Wallet: {address}</label>
        </div>
      }
      <div>
        {!connected && <button className='  flex flex-col items-center border-1 bg-cyan-600 border-blue-300 hover:scale-105 px-3 py-2 rounded-xl font-medium text-white' onClick={createWallet} disabled={loading}>{ loading ? 'loading...' : 'Create Social'}</button>}
        {connected && 
          <button onClick={disconnect} disabled={loading}>Disconnect</button>
        }
      </div>
    </div>
  )
}

export default RpcProviderExample;
