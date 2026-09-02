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
  status: "development" | "approved";
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

// This is the single replacement source for the portfolio. Development entries
// demonstrate layout only and are excluded when PUBLIC_SITE_STATUS=production.
export const portfolioProjects: PortfolioProject[] = [
  ["ghostwriting-project", "Ghostwriting project placeholder", "Ghostwriting", "portrait"],
  ["editing-project", "Editing project placeholder", "Editing", "landscape"],
  ["cover-design-project", "Cover design project placeholder", "Cover Design", "square"],
  ["illustration-project", "Illustration project placeholder", "Illustration", "portrait"],
  ["formatting-project", "Formatting project placeholder", "Formatting", "landscape"],
  ["publishing-project", "Publishing project placeholder", "Publishing", "square"],
  ["audiobook-project", "Audiobook project placeholder", "Audiobook", "portrait"],
  ["marketing-project", "Marketing project placeholder", "Marketing", "landscape"],
  ["author-website-project", "Author website project placeholder", "Author Websites", "square"],
].map(([slug, title, category, format]) => ({
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
}));
