import { SITE } from "@data/constants";
import { getCollection } from "astro:content";

export type BlogLang = "es" | "en" | "pr";

export interface BlogPagination {
  currentPage: number;
  lastPage: number;
  url: {
    current: string;
    prev?: string;
    next?: string;
    first?: string;
    last?: string;
  };
}

interface BlogTranslation {
  title: string;
  subTitle: string;
  metaDescription: string;
  ogTitle: string;
  pageLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export const BLOG_PAGE_SIZE = 9;

export const blogTranslations: Record<BlogLang, BlogTranslation> = {
  es: {
    title: "Blog",
    subTitle:
      "Explora las ultimas noticias, consejos y analisis de Sotomayor Consulting International para potenciar tu patrimonio y proyectos.",
    metaDescription:
      "Explora las ultimas noticias, consejos y analisis de Sotomayor Consulting International.",
    ogTitle: "Blog | Sotomayor Consulting",
    pageLabel: "Pagina",
    previousLabel: "Anterior",
    nextLabel: "Siguiente",
  },
  en: {
    title: "Blog",
    subTitle:
      "Explore the latest news, tips, and analysis from Sotomayor Consulting International to enhance your wealth and projects.",
    metaDescription:
      "Explore the latest news, tips, and analysis from Sotomayor Consulting International.",
    ogTitle: "Blog | Sotomayor Consulting",
    pageLabel: "Page",
    previousLabel: "Previous",
    nextLabel: "Next",
  },
  pr: {
    title: "Blog",
    subTitle:
      "Explore as ultimas noticias, dicas e analises da Sotomayor Consulting International para melhorar seu patrimonio e projetos.",
    metaDescription:
      "Explore as ultimas noticias, dicas e analises da Sotomayor Consulting International.",
    ogTitle: "Blog | Sotomayor Consulting",
    pageLabel: "Pagina",
    previousLabel: "Anterior",
    nextLabel: "Proxima",
  },
};

export async function getInsightPosts(langPrefix: BlogLang) {
  return getCollection("insights", ({ id }) => id.startsWith(`${langPrefix}/`));
}

export function getBlogBasePath(langPrefix: BlogLang) {
  return langPrefix === "es" ? "/inicio/blog" : `/inicio/${langPrefix}/blog`;
}

export function getBlogPageMeta(langPrefix: BlogLang, currentPage = 1) {
  const translation = blogTranslations[langPrefix];
  const pageSuffix =
    currentPage > 1 ? ` - ${translation.pageLabel} ${currentPage}` : "";

  return {
    ...translation,
    pageTitle: `${translation.title}${pageSuffix} | ${SITE.title}`,
  };
}

export function buildPagination(
  basePath: string,
  currentPage: number,
  lastPage: number,
): BlogPagination {
  const getPageUrl = (pageNumber: number) =>
    pageNumber === 1 ? basePath : `${basePath}/${pageNumber}`;

  return {
    currentPage,
    lastPage,
    url: {
      current: getPageUrl(currentPage),
      prev: currentPage > 1 ? getPageUrl(currentPage - 1) : undefined,
      next: currentPage < lastPage ? getPageUrl(currentPage + 1) : undefined,
      first: currentPage > 1 ? getPageUrl(1) : undefined,
      last: currentPage < lastPage ? getPageUrl(lastPage) : undefined,
    },
  };
}
