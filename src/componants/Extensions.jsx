import React, { useState } from "react";

export default function Extensions(props) {
  const [input, setInput] = useState({
    MaxTokensPerWallet: false,
    LiquidityTax: false,
    DeveloperTax: false,
    MaxTransactionAmount: false,
  });

  const tokenDetails = props.tokenDetails;
  // const tokenDetails = {
  //   name: "",
  //   symbol: "",
  //   description: "",
  //   supply: 0,
  //   chain: "",
  //   decimals: 0,
  // };

  const handleCheckboxChange = (event) => {
    const checkboxId = event.target.id;
    const isChecked = event.target.checked;
    console.log(`${checkboxId}: ${isChecked}`);

    if (MaxTransactionAmount === false) {
      tokenDetails.MaxTransactionAmount = tokenDetails.supply;
    }

    if (MaxTokensPerWallet === false) {
      tokenDetails.MaxTokensPerWallet = tokenDetails.supply;
    }

    if (checkboxId === "MaxTokensPerWallet" && isChecked === true) {
      setInput((prevState) => ({
        ...prevState,
        MaxTokensPerWallet: true,
      }));
    } else if (checkboxId === "MaxTokensPerWallet" && isChecked === false) {
      setInput((prevState) => ({
        ...prevState,
        MaxTokensPerWallet: false,
      }));
    }

    if (checkboxId === "LiquidityTax" && isChecked === true) {
      setInput((prevState) => ({
        ...prevState,
        LiquidityTax: true,
      }));
    } else if (checkboxId === "LiquidityTax" && isChecked === false) {
      setInput((prevState) => ({
        ...prevState,
        LiquidityTax: false,
      }));
    }

    if (checkboxId === "DeveloperTax" && isChecked === true) {
      setInput((prevState) => ({
        ...prevState,
        DeveloperTax: true,
      }));
    } else if (checkboxId === "DeveloperTax" && isChecked === false) {
      setInput((prevState) => ({
        ...prevState,
        DeveloperTax: false,
      }));
    }

    if (checkboxId === "MaxTransactionAmount" && isChecked === true) {
      setInput((prevState) => ({
        ...prevState,
        MaxTransactionAmount: true,
      }));
    } else if (checkboxId === "MaxTransactionAmount" && isChecked === false) {
      setInput((prevState) => ({
        ...prevState,
        MaxTransactionAmount: false,
      }));
      tokenDetails.MaxTransactionAmount = tokenDetails.supply;
    }
  };

  const MaxTokensPerWalletValue = (event) => {
    tokenDetails.MaxTokensPerWallet = event.target.value;
  };

  const buyLPValue = (event) => {
    tokenDetails.buyLPValue = event.target.value;
  };

  const sellLPValue = (event) => {
    tokenDetails.sellLPValue = event.target.value;
  };

  const buyDevTAX = (event) => {
    tokenDetails.buyDevTAX = event.target.value;
  };

  const sellDevTAX = (event) => {
    tokenDetails.sellDevTAX = event.target.value;
  };

  const MaxTransactionAmount = (event) => {
    tokenDetails.MaxTransactionAmount = event.target.value;
  };

  if (input.MaxTokensPerWallet === true) {
    tokenDetails.MaxTokensPerWallet = tokenDetails.supply;
  }

  if (input.MaxTransactionAmount === true) {
    tokenDetails.MaxTransactionAmount = tokenDetails.supply;
  }

  function show() {
    console.log(
      tokenDetails.MaxTokensPerWallet,
      tokenDetails.MaxTransactionAmount
    );
  }
  return (
    <>
      <button onClick={show}>show</button>
      {/* extensions */}
      <div>
        {/* token per wallet */}
        <div>
          <div className="flex">
            <div>
              <input
                type="checkbox"
                className="mr-2 h-full w-[70%]"
                id="MaxTokensPerWallet"
                onChange={handleCheckboxChange}
              />
            </div>
            <div>Max Tokens Per Wallet</div>
          </div>
          {input.MaxTokensPerWallet && (
            <div>
              <div>
                <input
                  type="number"
                  className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
                  onChange={MaxTokensPerWalletValue}
                  defaultValue={9}
                />
              </div>
            </div>
          )}
        </div>

        {/* LP Tax */}
        <div>
          <div className="flex">
            <div>
              <input
                type="checkbox"
                className="mr-2 h-full w-[70%]"
                id="LiquidityTax"
                onChange={handleCheckboxChange}
              />
            </div>
            <div>Liquidity Tax</div>
          </div>
          {input.LiquidityTax && (
            <div className="flex justify-between">
              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Buy Liquidity Tax*</div>
                <div>
                  <input
                    type="number"
                    className="h-8 w-[96%] bg-[#343A40]"
                    onChange={buyLPValue}
                  />
                </div>
              </div>

              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Sell Liquidity Tax*</div>
                <div>
                  <input
                    type="number"
                    className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
                    onChange={sellLPValue}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Developer Tax */}
        <div>
          <div className="flex">
            <div>
              <input
                type="checkbox"
                className="mr-2 h-full w-[70%]"
                id="DeveloperTax"
                onChange={handleCheckboxChange}
              />
            </div>
            <div>Developer Tax</div>
          </div>
          {input.DeveloperTax && (
            <div className="flex justify-between">
              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Buy Developer Tax*</div>
                <div>
                  <input
                    type="number"
                    className="h-8 w-[96%] bg-[#343A40]"
                    onChange={buyDevTAX}
                  />
                </div>
              </div>

              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Sell Developer Tax*</div>
                <div>
                  <input
                    type="number"
                    className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
                    defaultValue={9}
                    onChange={sellDevTAX}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* maxTransactionAmount */}
        <div>
          <div className="flex">
            <div>
              <input
                type="checkbox"
                className="mr-2 h-full w-[70%]"
                id="MaxTransactionAmount"
                onChange={handleCheckboxChange}
              />
            </div>
            <div>Max Transaction Amount</div>
          </div>
          {input.MaxTransactionAmount && (
            <div>
              <div>
                <input
                  type="number"
                  className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
                  defaultValue={9}
                  onChange={MaxTransactionAmount}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
