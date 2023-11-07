/* eslint-disable no-undef */
import globby from 'globby';
import { getPrismicPages, getPublicSyllabus } from '../../src/utils/requests';
import {
  privateRoutes,
  sitemapTemplate,
  listOfSitemapsTemplate,
} from './sitemap-config';
import { isWhiteLabelAcademy } from '../../src/utils/variables';
import assetLists from '../../src/lib/asset-list.json';

const createArray = (length) => Array.from({ length }, (_, i) => i);

const engLang = {
  en: 'en',
  us: 'en',
};

async function generateSitemap() {
  console.log('Generating sitemaps...');

  const prismicPages = await getPrismicPages();
  const readPages = await getPublicSyllabus();
  const lessonsPages = assetLists.lessons;
  const exercisesPages = assetLists.excersises;
  const projectsPages = assetLists.projects;
  const howTosPages = assetLists.howTos;
  const technologyLandingPages = assetLists.landingTechnologies;
  const eventsPages = assetLists.events;

  const pagination = (data, conector) => {
    const limit = 20;
    const dataFilteredEng = data.filter((f) => f.lang === 'us' || f.lang === 'en');
    const dataFilteredEsp = data.filter((f) => f.lang === 'es');

    const pagesEng = Math.ceil(dataFilteredEng.length / limit);
    const pagesEsp = Math.ceil(dataFilteredEsp.length / limit);

    const paginatedEng = createArray(pagesEng).map((el) => `/${conector}?page=${el + 1}`);
    const paginatedEsp = createArray(pagesEsp).map((el) => `/es/${conector}?page=${el + 1}`);

    const paginated = [...paginatedEng, ...paginatedEsp];

    return paginated;
  };

  const generateSlugByLang = (data, conector, withDifficulty) => {
    const filteredBySlug = data.filter((f) => f?.slug);

    return filteredBySlug.map((l) => (withDifficulty
      ? `${engLang[l.lang] !== 'en' ? `${l?.lang ? `/${l?.lang}` : ''}` : ''}${conector ? `/${conector}` : ''}/${l?.difficulty ? l?.difficulty?.toLowerCase() : 'unknown'}/${l?.slug}`
      : `${engLang[l.lang] !== 'en' ? `${l?.lang ? `/${l?.lang}` : ''}` : ''}${conector ? `/${conector}` : ''}/${l?.slug}`));
  };
  const generateSlug = (data, conector) => data.map((l) => `${conector ? `/${conector}` : ''}/${l?.slug}`);

  const generateTechnologySlug = (data, conector, type) => {
    const getLangConnector = (lang) => (lang === 'en' ? '' : `/${lang}`);

    if (type === 'lesson') {
      const lessonsData = data?.length > 0 ? data.filter((l) => {
        const lessonExists = l.assets.some(
          (a) => (a?.asset_type === 'LESSON' || a?.asset_type === 'ARTICLE') && a?.category?.slug !== 'how-to' && a?.category?.slug !== 'como',
        );
        return lessonExists;
      }) : [];
      return lessonsData?.map((l) => (`${getLangConnector(l.lang)}/${conector}/${l?.slug}`));
    }
    if (type === 'exercise') {
      const exercisesData = data?.length > 0 ? data.filter((l) => {
        const assets = l.assets.some((a) => a?.asset_type === 'EXERCISE');
        return assets;
      }) : [];
      return exercisesData?.map((l) => (`${getLangConnector(l.lang)}/${conector}/${l?.slug}`));
    }
    if (type === 'project') {
      const projectsData = data?.length > 0 ? data.filter((l) => {
        const assets = l.assets.some((a) => a?.asset_type === 'PROJECT');
        return assets;
      }) : [];
      return projectsData.map((l) => (`${getLangConnector(l.lang)}/${conector}/${l?.slug}`));
    }
    if (type === 'how-to') {
      const howTosData = data?.length > 0 ? data.filter((l) => {
        const assets = l.assets.some(
          (a) => a.category?.slug === 'how-to' || a.category?.slug === 'como',
        );
        return assets;
      }) : [];
      return howTosData.map((l) => (`${getLangConnector(l.lang)}/${conector}/${l?.slug}`));
    }
    if (type === 'tech') {
      return (data?.length > 0 ? data.map(
        (l) => (`${getLangConnector(l.lang)}/${conector}/${l?.slug}`),
      ) : []);
    }
    return '';
  };

  const generatePrismicSlugByLang = (data) => {
    const typePage = data?.length > 0 && data.filter((p) => p.type === 'page');

    const routesList = data?.length > 0 ? typePage.map((l) => {
      const lang = l.lang.split('-')[0];
      if (lang !== 'en') {
        return `/${lang}/${l?.uid}`;
      }
      return `/${l?.uid}`;
    }) : [];
    return routesList;
  };

  const prismicTypePages = generatePrismicSlugByLang(prismicPages);
  const readRoute = generateSlug(readPages, 'read');
  const lessonsRoute = generateSlugByLang(lessonsPages, 'lesson');
  const exercisesRoute = generateSlugByLang(exercisesPages, 'interactive-exercise');
  const projectsCodingRoute = generateSlugByLang(projectsPages, 'interactive-coding-tutorial');
  const howTosRoute = generateSlugByLang(howTosPages, 'how-to');
  const eventsRoute = generateSlugByLang(eventsPages, 'workshops');

  const paginatedLessonsRoute = pagination(lessonsPages, 'lessons');
  const paginatedExercisesRoute = pagination(exercisesPages, 'interactive-exercises');
  const paginatedProjectsRoute = pagination(projectsPages, 'interactive-coding-tutorials');
  const paginatedHowTosRoute = pagination(howTosPages, 'how-to');

  const technologyLessonsRoute = generateTechnologySlug(technologyLandingPages, 'lessons/technology', 'lesson');
  const technologyExercisesRoute = generateTechnologySlug(technologyLandingPages, 'interactive-exercises/technology', 'exercise');
  const technologyProjectsRoute = generateTechnologySlug(technologyLandingPages, 'interactive-coding-tutorials/technology', 'project');
  const allTechnologiesRoute = generateTechnologySlug(technologyLandingPages, 'technology', 'tech');

  // excludes Nextjs files and API routes.
  const pages = await globby([
    'src/pages/**/*{.js,.jsx}',
    'src/pages/*{.js,.jsx}',
    '!src/pages/**/[slug]/*{.js,.jsx}',
    '!src/pages/**/[event_slug]{.js,.jsx}',
    '!src/pages/**/[slug]{.js,.jsx}',
    '!src/pages/**/[uid]{.js,.jsx}',
    '!src/pages/**/**/[technology]{.js,.jsx}',
    '!src/pages/**/[technology]/*{.js,.jsx}',
    '!src/pages/edit-markdown.jsx',
    '!src/pages/docs/[syllabusSlug]/[assetSlug]/*{.js,.jsx}',
    '!src/pages/docs/[syllabusSlug]/*{.js,.jsx}',
    ...privateRoutes,
    '!src/pages/**/_*{.js,.jsx}',
    '!src/pages/api',
  ]);
  const whiteLabelPages = [
    'src/pages/404.jsx',
    'src/pages/index.jsx',
    'src/pages/login/index.jsx',
    'src/pages/mentorship/index.jsx',
    'src/pages/checkout.jsx',
    'src/pages/thank-you.jsx',
  ];

  const pagesSitemap = !isWhiteLabelAcademy
    ? sitemapTemplate([
      ...pages, ...readRoute, ...prismicTypePages, ...paginatedLessonsRoute,
      ...paginatedExercisesRoute, ...paginatedProjectsRoute, ...paginatedHowTosRoute,
    ])
    : sitemapTemplate([
      ...whiteLabelPages, ...prismicTypePages,
    ]);

  const howToSitemap = sitemapTemplate(howTosRoute);
  const lessonsSitemap = sitemapTemplate(lessonsRoute);
  const projectsSitemap = sitemapTemplate(projectsCodingRoute);
  const exercisesSitemap = sitemapTemplate(exercisesRoute);
  const technologiesSitemap = sitemapTemplate([...technologyLessonsRoute, ...technologyExercisesRoute, ...technologyProjectsRoute, ...allTechnologiesRoute]);
  const eventsSitemap = sitemapTemplate(eventsRoute);

  const whiteLabelAcademySitemapsList = listOfSitemapsTemplate([
    'pages-sitemap.xml',
  ]);
  const sitemap = listOfSitemapsTemplate([
    'pages-sitemap.xml',
    'howto-sitemap.xml',
    'lessons-sitemap.xml',
    'projects-sitemap.xml',
    'exercises-sitemap.xml',
    'technologies-sitemap.xml',
  ]);
  const pagesSitemapList = isWhiteLabelAcademy ? whiteLabelAcademySitemapsList : sitemap;

  try {
    await Bun.write('public/pages-sitemap.xml', pagesSitemap);
    await Bun.write('public/howto-sitemap.xml', howToSitemap);
    await Bun.write('public/lessons-sitemap.xml', lessonsSitemap);
    await Bun.write('public/projects-sitemap.xml', projectsSitemap);
    await Bun.write('public/exercises-sitemap.xml', exercisesSitemap);
    await Bun.write('public/technologies-sitemap.xml', technologiesSitemap);
    await Bun.write('public/events-sitemap.xml', eventsSitemap);
  } catch (err) {
    console.error("Couldn't write sitemaps files", err);
  }

  await Bun.write('public/sitemap.xml', pagesSitemapList);

  console.log('Sitemaps generated!');
}
generateSitemap();
