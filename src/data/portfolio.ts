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
  imagePosition?: string;
  // "development": layout-only placeholder, hidden in production.
  // "sample": an illustrative concept sample, shown in production but
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

// Every category below is an illustrative concept sample - not verified
// client work with display permission. PortfolioTile and the project detail
// page always label these as samples rather than real projects.
export const portfolioProjects: PortfolioProject[] = [
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
    imagePosition: "78% center",
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
    imagePosition: "82% center",
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
  {
    slug: "sample-ghostwriting-a-second-wind",
    title: "A Second Wind",
    author: "Concept sample (client identity withheld)",
    genre: "Memoir",
    category: "Ghostwriting",
    services: ["Book ghostwriting", "Memoir ghostwriting"],
    format: "portrait",
    status: "sample",
    startingPoint: "A retired endurance athlete had years of recorded conversations and stories but no manuscript.",
    challenge: "Turning hours of transcribed interviews into a structured, page-turning narrative written in the client's own voice.",
    contribution: "A full-length ghostwritten memoir, developed from recorded interviews through outline, draft and structured revision passes.",
    outcome: "Concept sample only. Illustrates a finished manuscript written to read as the client speaking directly to the reader, with a clear narrative arc from first race to final finish line. No real client, book or result is being claimed.",
  },
  {
    slug: "sample-editing-before-after",
    title: "Developmental Edit: Before & After",
    author: "Concept sample (client identity withheld)",
    genre: "Contemporary fiction",
    category: "Editing",
    services: ["Developmental editing", "Line editing"],
    format: "landscape",
    status: "sample",
    startingPoint: "A debut novel had a strong premise but a sagging middle third and inconsistent pacing.",
    challenge: "Identifying which scenes carried the plot forward and which slowed it down, without flattening the author's voice.",
    contribution: "A full developmental edit with scene-by-scene notes, followed by a line edit pass focused on tightening prose and sharpening dialogue.",
    outcome: "Concept sample only. Illustrates the kind of margin notes and line-level tightening a manuscript can expect - for example, trimming an overwritten opening paragraph without losing its voice. No real client, book or result is being claimed.",
  },
  {
    slug: "sample-illustration-character-sheet",
    title: "Chapter Spot Illustrations",
    author: "Concept sample (client identity withheld)",
    genre: "Children's picture book",
    category: "Illustration",
    services: ["Book illustration", "Children's book illustration"],
    format: "square",
    status: "sample",
    startingPoint: "A children's author had a finished manuscript and a vague visual idea, but no artwork.",
    challenge: "Designing a consistent visual style for a recurring character across a full picture book.",
    contribution: "Character design, a short illustration style guide, and sample spot illustrations for three sample spreads.",
    outcome: "Concept sample only. Demonstrates a character style sheet and layout approach, not a completed commissioned book. No real client, book or result is being claimed.",
  },
  {
    slug: "sample-formatting-interior-spread",
    title: "Print & Ebook Interior Formatting",
    author: "Concept sample (client identity withheld)",
    genre: "Nonfiction",
    category: "Formatting",
    services: ["Interior book formatting", "Ebook formatting"],
    format: "portrait",
    status: "sample",
    startingPoint: "A finished manuscript existed only as an unformatted word processor document.",
    challenge: "Preparing one interior design that reads well as a printed paperback and reflows cleanly as an ebook.",
    contribution: "A print-ready interior layout with running heads, chapter openers and a consistent style sheet, plus a matching reflowable ebook file.",
    outcome: "Concept sample only. Shows the kind of interior layout decisions - typography, chapter openers, spacing - a formatting pass covers. No real client, book or result is being claimed.",
  },
  {
    slug: "sample-publishing-submission-package",
    title: "Self Publishing Submission Package",
    author: "Concept sample (client identity withheld)",
    genre: "General nonfiction",
    category: "Publishing",
    services: ["Amazon KDP assistance", "ISBN and metadata guidance"],
    format: "square",
    status: "sample",
    startingPoint: "An author had final print and ebook files ready but no publishing account experience.",
    challenge: "Preparing accurate metadata, categories and keywords, and guiding the author through an account they would hold and control themselves.",
    contribution: "A complete submission package - metadata, category and keyword recommendations, and a cover and interior upload checklist.",
    outcome: "Concept sample only. Illustrates the checklist and metadata work involved in a self publishing submission, not a completed live listing. No real client, book or result is being claimed.",
  },
  {
    slug: "sample-audiobook-production-plan",
    title: "Audiobook Production Plan",
    author: "Concept sample (client identity withheld)",
    genre: "Literary fiction",
    category: "Audiobook",
    services: ["Narration coordination", "Audio editing", "Audio mastering"],
    format: "portrait",
    status: "sample",
    startingPoint: "A published novel had strong reviews but no audio edition.",
    challenge: "Matching narration style and pacing to the book's tone, then coordinating recording, editing and mastering to platform specifications.",
    contribution: "A production plan covering narration direction notes, a recording and editing schedule, and mastering specifications for major platforms.",
    outcome: "Concept sample only. Shows the kind of production planning and technical specification an audiobook project involves. No real client, book or result is being claimed.",
  },
  {
    slug: "sample-marketing-launch-plan",
    title: "Book Launch & Listing Plan",
    author: "Concept sample (client identity withheld)",
    genre: "Commercial fiction",
    category: "Marketing",
    services: ["Book launch strategy", "Amazon listing optimisation"],
    format: "landscape",
    status: "sample",
    startingPoint: "A debut author had a finished book and a launch date, but no marketing plan.",
    challenge: "Building a realistic pre-launch and launch-week plan without promising results that depend on factors outside anyone's control.",
    contribution: "A launch timeline, optimised listing copy and category strategy, and a set of launch-week promotional assets.",
    outcome: "Concept sample only. Illustrates the kind of planning and listing work involved - no sales or ranking outcomes are implied or guaranteed. No real client, book or result is being claimed.",
  },
  {
    slug: "sample-author-website-plan",
    title: "Author Website Structure & Copy",
    author: "Concept sample (client identity withheld)",
    genre: "Author platform",
    category: "Author Websites",
    services: ["Author website design"],
    format: "square",
    status: "sample",
    startingPoint: "An author had no online presence beyond social media.",
    challenge: "Designing a simple site structure that supports discoverability without over-promising design work not yet built.",
    contribution: "A recommended site map, homepage copy draft, and a design brief covering visual direction and required pages.",
    outcome: "Concept sample only. Shows the planning and copywriting stage of an author website project, not a built or live site. No real client, book or result is being claimed.",
  },
];
