import { useState } from "react";
import { ethers } from "ethers";

export default function Main() {
  const [account, setAccount] = useState(null);

  const connectMetamask = async () => {
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Get the current connected account
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const currentAccount = await signer.getAddress();

      setAccount(currentAccount);
    } catch (error) {
      console.error("Error connecting to Metamask:", error.message);
    }
  };
  return (
    <>
      <header className="flex items-center justify-between w-full border-b-[0.5px] border-[#fffaf4] h-[3.2rem] px-4">
        <div className="">LOGO</div>

        <button onClick={connectMetamask} className="bg-[#864AF9] py-2 px-3">
          {account
            ? `${account.slice(0, 6)}...${account.slice(-4)}`
            : "Connect"}
        </button>
      </header>
      <main>
        <div>
          <div>
            <h1 className="text-5xl font-VoltEdge">Token Creator</h1>
          </div>
          <div className="text-xl font-VoltEdge">ERC20 token creator</div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-[92%] flex justify-between">
            <div className="border-[0.2px] w-[49.2%] px-5 pb-6">
              <div className="">
                <div className="text-[25px] font-VoltEdge my-2">Details</div>

                {/* name & symbol */}
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <div className="font-JetBrainsMedium">Name*</div>
                    <div>
                      <input type="text" className="bg-[#343A40] h-8 w-[96%]" />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="font-JetBrainsMedium">Symbol*</div>
                    <div>
                      <input
                        type="text"
                        className="bg-[#343A40] h-8 w-[100%]"
                      />
                    </div>
                  </div>
                </div>

                {/* supply & decimals */}
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <div className="font-JetBrainsMedium">Supply*</div>
                    <div>
                      <input
                        type="number"
                        className="bg-[#343A40] h-8 w-[96%]"
                      />
                    </div>
                  </div>

                  <div className="w-1/2">
                    <div className="font-JetBrainsMedium">Decimals*</div>
                    <div>
                      <input
                        type="number"
                        className="bg-[#343A40] h-8 w-[100%] font-JetBrainsMedium"
                        defaultValue={9}
                      />
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="w-full">
                  <div className="font-JetBrainsMedium">Description*</div>
                  <div>
                    <textarea
                      type="text"
                      className="bg-[#343A40] h-8 w-[100%]"
                    />
                  </div>
                </div>

                {/* chain */}
                <div className="w-full">
                  <div className="font-JetBrainsMedium">Chain*</div>
                  <div>
                    <select
                      name="chain"
                      id="chain"
                      className="bg-[#343A40] font-JetBrainsMedium h-7 rounded-md pl-1"
                    >
                      <option value="Ethereum">Ethereum</option>
                      <option value="Binance Smart Chain">
                        Binance Smart Chain
                      </option>
                      <option value="Polygon">Polygon</option>
                      <option value="Optimism">Optimism</option>
                      <option value="Avalanche">Avalanche</option>
                      <option value="Arbitrum">Arbitrum</option>
                    </select>
                  </div>
                </div>

                <div className="w-full mt-3 border-b-2"></div>
              </div>

              {/* extensions */}
              <div>
                <div className="flex">
                  <div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div>Max Tokens Per Wallet</div>
                </div>
              </div>
            </div>
            <div className="border-[0.2px] h-32 w-[49.2%]"></div>
          </div>
        </div>
      </main>
    </>
  );
}
