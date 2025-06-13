import MyWalletComponent from "@/components/MyWalletComponent";
import MyWalletAssetComponent from "@/components/MyWalletAssetComponent";
import { CardanoWallet } from "@meshsdk/react";



export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome to the Mesh PBL Module 101</h1>
        <CardanoWallet />
        <MyWalletComponent />
      </div>
      <h2>Assets</h2>
      <p>Here are the assets in your wallet:</p>
      <div>
        <h2>My Wallet Assets</h2>
        <p>Here are the assets in your wallet:</p>
        <MyWalletAssetComponent />
      </div>
    </>
  );
}