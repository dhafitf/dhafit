import type { DefaultSeoProps as DefaultSeoPropsType } from "next-seo";
import type { AdditionalRobotsProps } from "next-seo/lib/types";

export const BaseUrl = "https://dhafit.vercel.app/";
export const DefaultSeoProps: DefaultSeoPropsType = {
  titleTemplate: "%s - Dhafit Farenza",
  defaultTitle: "Dhafit Farenza",
  description: "Dhafit Farenza is a translator & full-stack developer who specializes in building web applications.",
  canonical: BaseUrl,
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "summary",
      content: "Dhafit Farenza is a translator & full-stack developer who specializes in building web applications.",
    },
    { name: "keywords", content: "translator, full-stack, developer, web, application, javascript, typescript, blog, portfolio, nextjs" },
    { name: "author", content: "Dhafit Farenza" },
    { name: "owner", content: `Dhafit Farenza, dhafidfz@gmail.com` },
    { name: "designer", content: `Dhafit Farenza, dhafidfz@gmail.com` },
    { name: "reply-to", content: "dhafidfz@gmail.com" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#3A3D68" },
    { name: "twitter:image", content: `${BaseUrl}android-chrome-192x192.png` },
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BaseUrl,
    title: "Dhafit Farenza",
    description: "Dhafit Farenza is a translator & full-stack developer who specializes in building web applications.",
    site_name: "Dhafit Farenza",
    images: [
      {
        url: `${BaseUrl}android-chrome-192x192.png`,
        alt: "OpenGraphImage",
      },
    ],
  },
  twitter: {
    handle: "@DhafitF",
    site: "@DhafitF",
    cardType: "summary",
  },
};

export const robotBlockingPageProps: AdditionalRobotsProps = {
  nosnippet: true,
  notranslate: true,
  noimageindex: true,
  noarchive: true,
  maxSnippet: -1,
  maxImagePreview: "none",
  maxVideoPreview: -1,
};

export default DefaultSeoProps;
