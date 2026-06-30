# Shelby SDK Examples

A collection of practical Node.js examples demonstrating how to use the official Shelby SDK.

## Features

- Upload blobs
- Download blobs
- Batch upload multiple blobs
- Environment variable configuration
- Secure `.env.example` setup

## Examples

- ✅ **Upload Blob** – Upload a single blob to Shelby Network.
- ✅ **Download Blob** – Download a previously uploaded blob.
- ✅ **Batch Upload** – Upload multiple blobs in a single operation.

## Installation

```bash
npm install
cp .env.example .env
```

Edit your `.env` file:

```env
PRIVATE_KEY=ed25519-priv-your_private_key_here
SHELBY_API_KEY=your_api_key_here
```

## Run Examples

Upload a blob:

```bash
node examples/upload.mjs
```

Download a blob:

```bash
node examples/download.mjs
```

Batch upload blobs:

```bash
node examples/batch-upload.mjs
```

## Requirements

- Node.js 22+
- Shelby API Key
- ShelbyUSD balance
