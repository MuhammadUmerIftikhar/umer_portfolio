import { NextStudio } from "next-sanity/studio";
import type { NextStudioProps } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-dynamic";

const studioConfig: NextStudioProps["config"] = config;

export default function StudioPage() {
  return <NextStudio config={studioConfig} />;
}
