import "dotenv/config";
import { ShelbyClient } from "@shelby-protocol/sdk/node";

const client = new ShelbyClient({
  network: "shelbynet",
  apiKey: process.env.SHELBY_API_KEY,
});

try {
  const blob = await client.download({
    account: "0xbe06a9f5381cd2059263e61dc54d1f66f99e92cd28d01a3c54f43d025546cee2",
    blobName: "sdk-test.txt",
  });

  console.log("✅ Download başarılı!");
  console.log(new TextDecoder().decode(blob.data));
} catch (err) {
  console.error("❌ Download başarısız:");
  console.error(err);
}
