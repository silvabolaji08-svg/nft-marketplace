import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("NFTMintModule", (m) => {
  const nftMint = m.contract("NFTMint");

  return { nftMint };
});