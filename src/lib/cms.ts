import { createClient, type QueryParams } from "next-sanity";
import { profile } from "@/lib/profile";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2024-08-01";
const token = process.env.SANITY_READ_TOKEN;

export const sanityClient =
  projectId && dataset
    ? createClient({ projectId, dataset, apiVersion, useCdn: true, token })
    : null;

export async function fetchFromSanity<T>(query: string, params?: QueryParams) {
  if (!sanityClient) return null;
  return sanityClient.fetch<T>(query, params || {});
}

export async function getProfileData(): Promise<typeof profile> {
  if (!sanityClient) return profile;
  try {
    const sanityProfile = await sanityClient.fetch<typeof profile | null>(
      `*[_type == "portfolio"][0]{
        name,
        title,
        location,
        bio,
        contact,
        specialties,
        metrics,
        projects[]{title,problem,solution,impact,metrics,tech,links},
        stack[]{name,usage},
        experience[]{role,org,period,achievements,tech}
      }`,
    );
    return sanityProfile ? { ...profile, ...sanityProfile } : profile;
  } catch (error) {
    console.error("SANITY_FETCH_ERROR", error);
    return profile;
  }
}
