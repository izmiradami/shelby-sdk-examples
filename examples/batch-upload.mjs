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

try {
  await client.batchUpload({
    blobs: [
      {
        blobName: "batch/file1.txt",
        blobData: new TextEncoder().encode("Hello from file 1!"),
      },
      {
        blobName: "batch/file2.txt",
        blobData: new TextEncoder().encode("Hello from file 2!"),
      },
    ],
    signer,
    expirationMicros: Date.now() * 1000 + 86400 * 1000000,
  });

  console.log("✅ Batch upload successful!");
} catch (err) {
  console.error("❌ Batch upload failed:");
  console.error(err);
}
