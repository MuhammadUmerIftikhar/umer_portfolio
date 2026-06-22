import { client } from "./client";
import type {
  SanityProfile,
  SanityTechStack,
  SanityExpertise,
  SanityProject,
} from "./types";

/* ── helpers ── */
const isSanityConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "";

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const result = await client.fetch<T>(query);
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

/* ── GROQ queries ── */
const profileQuery = `*[_type == "profile"][0]{
  _id, name, title, tagline, bio,
  avatar{ asset, hotspot, crop },
  stats[]{ value, label, icon },
  contact{ email, whatsapp, location },
  socials{ linkedin, github, upwork, twitter }
}`;

const techStackQuery = `*[_type == "techStack"] | order(order asc){
  _id, name, abbr, bg, border, text, order
}`;

const expertiseQuery = `*[_type == "expertise"] | order(order asc){
  _id, icon, title, description, gradient, bg, border, iconColor, order
}`;

const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc){
  _id, title, thumbnail{ asset, hotspot, crop },
  tags, tagColors, description, platforms,
  gradient, accentColor, shapes, category, year, featured
}`;

const allProjectsQuery = `*[_type == "project"] | order(featured desc, order asc){
  _id, title, thumbnail{ asset, hotspot, crop },
  tags, tagColors, description, platforms,
  gradient, accentColor, shapes, category, year, featured
}`;

/* ── exported fetchers (each returns null when Sanity is unconfigured) ── */
export async function getProfile(): Promise<SanityProfile | null> {
  return safeFetch<SanityProfile | null>(profileQuery, null);
}

export async function getTechStack(): Promise<SanityTechStack[] | null> {
  return safeFetch<SanityTechStack[] | null>(techStackQuery, null);
}

export async function getExpertise(): Promise<SanityExpertise[] | null> {
  return safeFetch<SanityExpertise[] | null>(expertiseQuery, null);
}

export async function getFeaturedProjects(): Promise<SanityProject[] | null> {
  return safeFetch<SanityProject[] | null>(featuredProjectsQuery, null);
}

export async function getAllProjects(): Promise<SanityProject[] | null> {
  return safeFetch<SanityProject[] | null>(allProjectsQuery, null);
}
