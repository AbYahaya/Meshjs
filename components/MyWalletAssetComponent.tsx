import { useAssets } from "@meshsdk/react";

export default function MyWalletAssetComponent() {
  const assets = useAssets();

  if (assets === undefined) {
    return <p>Loading assets...</p>;
  }

  if (!assets || assets.length === 0) {
    return <p>No asset in wallet</p>;
  }

  return (
    <div>
      <h2>This is my wallet asset component!</h2>
      <pre>{JSON.stringify(assets, null, 2)}</pre>
    </div>
  );
}