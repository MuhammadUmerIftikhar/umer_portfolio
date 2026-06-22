import type { Image } from "@sanity/types";

export interface SanityImage extends Image {
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface SanityStat {
  value: string;
  label: string;
  icon: string;
}

export interface SanityContact {
  email: string;
  whatsapp: string;
  location: string;
}

export interface SanitySocials {
  linkedin?: string;
  github?: string;
  upwork?: string;
  twitter?: string;
}

export interface SanityProfile {
  _id: string;
  name: string;
  title: string;
  tagline?: string;
  bio?: string;
  avatar?: SanityImage;
  stats?: SanityStat[];
  contact?: SanityContact;
  socials?: SanitySocials;
}

export interface SanityTechStack {
  _id: string;
  name: string;
  abbr: string;
  bg: string;
  border: string;
  text: string;
  order?: number;
}

export interface SanityExpertise {
  _id: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
  bg: string;
  border: string;
  iconColor: string;
  order?: number;
}

export interface SanityProject {
  _id: string;
  title: string;
  thumbnail?: SanityImage;
  tags?: string[];
  tagColors?: string[];
  description?: string;
  platforms?: string[];
  gradient?: string;
  accentColor?: string;
  shapes?: "military" | "fantasy" | "racing" | "strategy";
  category?: string;
  year?: string;
  featured?: boolean;
  order?: number;
}
