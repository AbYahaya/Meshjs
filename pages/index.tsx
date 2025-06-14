import MyWalletComponent from "@/components/MyWalletComponent";
import MyWalletAssetComponent from "@/components/MyWalletAssetComponent";
import { CardanoWallet } from "@meshsdk/react";
import Navbar from "@/components/NavBar";



export default function Home() {
  return (
    <div>
      <h1>Welcome to the Mesh PBL Module 101</h1>
      <CardanoWallet />
      
  <Navbar/>
</div>
      
    

    
  );
}