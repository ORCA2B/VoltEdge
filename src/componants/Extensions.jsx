/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Extensions() {
  const [tokenPerWallet, setTokenPerWallet] = useState(false);
  const [LPtax, setLPtax] = useState(false);
  const [devTax, setDevTax] = useState(false);
  const [maxTransactionAmount, setMaxTransactionAmount] = useState(false);

  const tokenPerWalletChange = (event) => {
    console.log(event.target.value);
    setTokenPerWallet((current) => !current);
  };

  const feesChange = (event) => {
    console.log(event.target.value);
    setLPtax((current) => !current);
  };

  const devfeesChange = (event) => {
    console.log(event.target.value);
    setDevTax((current) => !current);
  };

  const maxTransactionAmountChange = (event) => {
    console.log(event.target.value);
    setMaxTransactionAmount((current) => !current);
  };

  return (
    <>
      {/* extensions */}
      <div>
        {/* token per wallet */}
        <div>
          <div className="flex">
            <div>
              <input
                type="checkbox"
                name=""
                id="MTPW"
                value={tokenPerWallet}
                onChange={tokenPerWalletChange}
              />
            </div>
            <div>Max Tokens Per Wallet</div>
          </div>
          {tokenPerWallet && (
            <div>
              <div>
                <input
                  type="number"
                  className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
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
                name=""
                id="MTPW"
                value={LPtax}
                onChange={feesChange}
              />
            </div>
            <div>Liquidity Tax</div>
          </div>
          {LPtax && (
            <div className="flex justify-between">
              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Buy Liquidity Tax*</div>
                <div>
                  <input type="number" className="h-8 w-[96%] bg-[#343A40]" />
                </div>
              </div>

              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Sell Liquidity Tax*</div>
                <div>
                  <input
                    type="number"
                    className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
                    defaultValue={9}
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
                name=""
                id="MTPW"
                value={devTax}
                onChange={devfeesChange}
              />
            </div>
            <div>Developer Tax</div>
          </div>
          {devTax && (
            <div className="flex justify-between">
              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Buy Developer Tax*</div>
                <div>
                  <input type="number" className="h-8 w-[96%] bg-[#343A40]" />
                </div>
              </div>

              <div className="w-1/2">
                <div className="font-JetBrainsMedium">Sell Developer Tax*</div>
                <div>
                  <input
                    type="number"
                    className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
                    defaultValue={9}
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
                name=""
                id="MTPW"
                value={maxTransactionAmount}
                onChange={maxTransactionAmountChange}
              />
            </div>
            <div>Max Transaction Amount</div>
          </div>
          {maxTransactionAmount && (
            <div>
              <div>
                <input
                  type="number"
                  className="font-JetBrainsMedium h-8 w-[100%] bg-[#343A40]"
                  defaultValue={9}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
