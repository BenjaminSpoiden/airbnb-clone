import { SanityImageSource } from "@sanity/asset-utils"
import { createClient, createImageUrlBuilder, ProjectConfig } from "next-sanity"


const config: ProjectConfig = { 
   dataset: process.env.NEXT_PUBLIC_DATASET || "production",
   projectId: process.env.NEXT_PUBLIC_SANITY_ID,
}

export const url = (source: SanityImageSource) => createImageUrlBuilder(config).image(source) 
export const sanityClient = createClient(config)