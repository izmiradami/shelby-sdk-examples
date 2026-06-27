import "dotenv/config";
import { ShelbyClient } from "@shelby-protocol/sdk/node";
import { Account, Ed25519PrivateKey, Network } from "@aptos-labs/ts-sdk";

const privateKey = new Ed25519PrivateKey(
  process.env.PRIVATE_KEY.replace("ed25519-priv-", "")
);

const signer = Account.fromPrivateKey({
  privateKey,
});

const client = new ShelbyClient({
  network: Network.SHELBYNET,
  apiKey: process.env.SHELBY_API_KEY,
});

const data = new TextEncoder().encode("Hello from Shelby SDK!");

try {
  await client.upload({
    blobData: data,
    signer,
    blobName: "sdk-test.txt",
    expirationMicros: Date.now() * 1000 + 86400 * 1000000,
  });

  console.log("✅ Upload successful!");
} catch (err) {
  console.error("❌ Upload failed:");
  console.error(err);
}
