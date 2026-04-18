import type { Metadata } from "next";

export const siteName = "Stavebný sociálny podnik s.r.o.";
export const siteUrl = "https://www.rssp.sk";
export const defaultOgImage = "/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = defaultOgImage,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const canonical = path || "/";
  const fullTitle = title === "Domov" ? siteName : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      locale: "sk_SK",
      url: canonical,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
