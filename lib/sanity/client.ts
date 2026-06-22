import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!projectId) {
  console.warn(
    "[Sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set.\n" +
    "  → Copy .env.local.example to .env.local and fill in your project ID.\n" +
    "  → The app will run with static fallback data until this is configured."
  );
}

export const client = createClient({
  projectId: projectId ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});
