export type PortfolioCategory =
  | "Ghostwriting"
  | "Editing"
  | "Cover Design"
  | "Illustration"
  | "Formatting"
  | "Publishing"
  | "Audiobook"
  | "Marketing"
  | "Author Websites";

export type PortfolioFormat = "portrait" | "landscape" | "square";

export interface PortfolioProject {
  slug: string;
  title: string;
  author: string;
  genre: string;
  category: PortfolioCategory;
  services: string[];
  format: PortfolioFormat;
  image?: string;
  imageAlt?: string;
  // "development": layout-only placeholder, hidden in production.
  // "sample": an illustrative concept design, shown in production but
  //   clearly labelled as a sample rather than verified client work.
  // "approved": real, permissioned client work.
  status: "development" | "approved" | "sample";
  startingPoint: string;
  challenge: string;
  contribution: string;
  outcome: string;
}

export const portfolioFilters = [
  "All Portfolio",
  "Ghostwriting",
  "Editing",
  "Cover Design",
  "Illustration",
  "Formatting",
  "Publishing",
  "Audiobook",
  "Marketing",
  "Author Websites",
] as const;

const developmentPlaceholders: [string, string, PortfolioCategory, PortfolioFormat][] = [
  ["ghostwriting-project", "Ghostwriting project placeholder", "Ghostwriting", "portrait"],
  ["editing-project", "Editing project placeholder", "Editing", "landscape"],
  ["illustration-project", "Illustration project placeholder", "Illustration", "portrait"],
  ["formatting-project", "Formatting project placeholder", "Formatting", "landscape"],
  ["publishing-project", "Publishing project placeholder", "Publishing", "square"],
  ["audiobook-project", "Audiobook project placeholder", "Audiobook", "portrait"],
  ["marketing-project", "Marketing project placeholder", "Marketing", "landscape"],
  ["author-website-project", "Author website project placeholder", "Author Websites", "square"],
];

// Illustrative cover-design samples. These are concept/spec designs, not
// verified client work with display permission - PortfolioTile always
// labels them "Sample design" and they are excluded from approvedCount.
const coverDesignSamples: PortfolioProject[] = [
  {
    slug: "sample-cover-look-into-me",
    title: "Look Into Me",
    author: "Sabine Mercer (sample)",
    genre: "Contemporary noir / psychological thriller",
    category: "Cover Design",
    services: ["Cover Design"],
    format: "landscape",
    image: "/images/portfolio/sample-look-into-me.png",
    imageAlt: "Sample full wraparound book cover design for a contemporary noir thriller titled Look Into Me",
    status: "sample",
    startingPoint: "Illustrative sample only - not a real client project.",
    challenge: "Show a full front, spine and back jacket treatment for a character-driven psychological thriller.",
    contribution: "Concept cover design and typography.",
    outcome: "Sample design intended to demonstrate range. No real author, publisher or sales outcome is implied.",
  },
  {
    slug: "sample-cover-residual-light",
    title: "Residual Light",
    author: "Dr. Livia Soren (sample)",
    genre: "Psychological suspense",
    category: "Cover Design",
    services: ["Cover Design"],
    format: "landscape",
    image: "/images/portfolio/sample-residual-light.png",
    imageAlt: "Sample full wraparound book cover design for a psychological suspense novel titled Residual Light",
    status: "sample",
    startingPoint: "Illustrative sample only - not a real client project.",
    challenge: "Blend clinical, evidentiary motifs with a portrait-led cover for a memory-driven suspense novel.",
    contribution: "Concept cover design and typography.",
    outcome: "Sample design intended to demonstrate range. No real author, publisher or sales outcome is implied.",
  },
  {
    slug: "sample-cover-cartographer-of-rain",
    title: "The Cartographer of Rain",
    author: "Mara Vey (sample)",
    genre: "Literary fiction",
    category: "Cover Design",
    services: ["Cover Design"],
    format: "portrait",
    image: "/images/portfolio/sample-cartographer-of-rain.png",
    imageAlt: "Sample front cover design for a literary fiction novel titled The Cartographer of Rain, styled as a watercolour map",
    status: "sample",
    startingPoint: "Illustrative sample only - not a real client project.",
    challenge: "Express a literary, place-driven story through an illustrated map motif rather than a figurative image.",
    contribution: "Concept cover illustration and typography.",
    outcome: "Sample design intended to demonstrate range. No real author, publisher or sales outcome is implied.",
  },
  {
    slug: "sample-cover-primal-dominion",
    title: "Primal Dominion",
    author: "Michael Harrow (sample)",
    genre: "Prehistoric adventure fiction",
    category: "Cover Design",
    services: ["Cover Design"],
    format: "portrait",
    image: "/images/portfolio/sample-primal-dominion.png",
    imageAlt: "Sample front cover design for a prehistoric adventure novel titled Primal Dominion",
    status: "sample",
    startingPoint: "Illustrative sample only - not a real client project.",
    challenge: "Deliver a high-impact, genre-forward cover suited to commercial adventure fiction.",
    contribution: "Concept cover design and typography.",
    outcome: "Sample design intended to demonstrate range. No real author, publisher or sales outcome is implied.",
  },
];

// This is the single replacement source for the portfolio. Development
// entries demonstrate layout only and are excluded when
// PUBLIC_SITE_STATUS=production; sample entries are shown but always
// labelled as illustrative, not real client work.
export const portfolioProjects: PortfolioProject[] = [
  ...coverDesignSamples,
  ...developmentPlaceholders.map(([slug, title, category, format]) => ({
    slug,
    title,
    author: "Author attribution required",
    genre: "Genre confirmation required",
    category: category as PortfolioCategory,
    services: [category as string],
    format: format as PortfolioFormat,
    status: "development" as const,
    startingPoint: "Approved project starting point required.",
    challenge: "Verified project challenge required.",
    contribution: "Confirmed Author Vista contribution required.",
    outcome: "Approved final assets and verified outcome required.",
  })),
];
