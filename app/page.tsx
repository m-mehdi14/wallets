import RpcProviderExample from "./components/Social";
import Ether from "./components/Ether"
import WagmiExample from "./components/Wagmi";
import Rainbow from "./components/RainbowKit"
import Connect from "./components/Connectkit"
function App() {
  return (
    <>
    <div className=" bg-slate-700  max-w-screen-2xl mx-auto h-screen flex flex-col items-center ">
      <div className=" text-5xl font-bold text-white shadow-2xl md:mb-20 mt-5">
      Account Abstraction Smart Wallets
      </div>

    <div className=" flex flex-col md:flex-row justify-evenly items-center md:space-x-10">

      <div className=" text-center">
        <h2 className=" text-xl text-white font-semibold mb-2">Using Socials</h2>
       <RpcProviderExample/>
       </div>


       <div className=" text-center">
        <h2 className="text-xl text-white font-semibold mb-2">Using Ether</h2>
        <Ether/>
        </div>


        <div className=" text-center">
          <h2 className=" text-xl text-white font-semibold mb-2">Using Wagmi</h2>
     <WagmiExample/>
     </div>


     <div className=" text-center">
      <h2 className="text-xl text-white font-semibold mb-2">Using RainbowKit</h2>
     <Rainbow/>
     </div>


     <div className=" text-center">
      <h2 className="text-xl text-white font-semibold mb-2">Using ConnectKit</h2>
     <Connect/>
     </div>

    </div>
    </div>
    </>
  );
}

export default App;