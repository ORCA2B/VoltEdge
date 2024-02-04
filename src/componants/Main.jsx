import Extensions from "./Extensions";

import { useState } from "react";

export default function Main() {
  const [account, setAccount] = useState(null);

  const tokenDetails = {
    name: "",
    symbol: "",
    description: "",
    supply: 0,
    chain: "",
    decimals: 0,
  };

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

  const nameChange = (event) => {
    tokenDetails.name = event.target.value;
  };

  const symbolChange = (event) => {
    tokenDetails.symbol = event.target.value;
  };

  const descriptionChange = (event) => {
    tokenDetails.description = event.target.value;
  };

  const supplyChange = (event) => {
    tokenDetails.supply = event.target.value;
  };

  const chainChange = (event) => {
    tokenDetails.chain = event.target.value;
  };

  const decimalsChange = (event) => {
    tokenDetails.decimals = event.target.value;
  };

  return (
    <>
      <header className="flex h-[3.2rem] w-full items-center justify-between border-b-[0.5px] border-[#fffaf4] px-4">
        <div className="">LOGO</div>

        <button onClick={connectMetamask} className="bg-[#864AF9] px-3 py-2">
          {account
            ? `${account.slice(0, 6)}...${account.slice(-4)}`
            : "Connect"}
        </button>
      </header>
      <main>
        <div>
          <div>
            <h1 className="font-VoltEdge text-5xl">Token Creator</h1>
          </div>
          <div className="font-VoltEdge text-xl">ERC20 token creator</div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-[92%] justify-between">
            <div className="w-[49.2%] border-[0.2px] px-5 pb-6">
              <div className="">
                <div className="font-VoltEdge my-2 text-[25px]">Details</div>

                {/* name & symbol */}
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <div className="font-JetBrainsMedium">Name*</div>
                    <div>
                      <input
                        type="text"
                        onChange={nameChange}
                        className="h-8 w-[96%] bg-[#343A40]"
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="font-JetBrainsMedium">Symbol*</div>
                    <div>
                      <input
                        type="text"
                        onChange={symbolChange}
                        className="h-8 w-[100%] bg-[#343A40]"
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
                        onChange={supplyChange}
                        className="h-8 w-[96%] bg-[#343A40]"
                      />
                    </div>
                  </div>

                  <div className="w-1/2">
                    <div className="font-JetBrainsMedium">Decimals*</div>
                    <div>
                      <input
                        type="number"
                        onChange={decimalsChange}
                        className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
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
                      onChange={descriptionChange}
                      className="h-8 w-[100%] bg-[#343A40]"
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
                      className="font-JetBrainsMedium h-7 rounded-md bg-[#343A40] pl-1"
                      onChange={chainChange}
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

                <div className="mt-3 w-full border-b-2"></div>
                <Extensions tokenDetails={tokenDetails} />
              </div>
            </div>
            <div className="h-32 w-[49.2%] border-[0.2px]"></div>
          </div>
        </div>
      </main>
    </>
  );
}
