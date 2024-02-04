/* eslint-disable react/prop-types */
import { ethers } from "ethers";

import { useState } from "react";

export default function Extensions(props) {
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

  const deploy = async () => {
    // Connect to your Ethereum provider
    const provider = new ethers.providers.JsonRpcProvider(
      "9153af587dc24275b774051cfafaf727",
    );

    // Your Ethereum wallet private key
    const privateKey =
      "98e67f9fb39dcfcf785e8be45d9b476028a380bfe473531f12231b9f2147efc4";

    // Create a wallet from the private key
    const wallet = new ethers.Wallet(privateKey, provider);

    const contractSource = `
      // Your Solidity contract code here
      pragma solidity ^0.8.0;

      contract SimpleStorage {
          uint256 public data;

          function setData(uint256 _data) public {
              data = _data;
          }
      }
    `;

    // Compile the contract
    const factory = new ethers.ContractFactory(contractSource, "", wallet);
    const contract = await factory.deploy();

    // Wait for the contract to be mined
    await contract.deployed();

    // Log contract address
    console.log("Contract deployed to:", contract.address);
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
      <button onClick={deploy}>click a w9</button>
    </>
  );
}
