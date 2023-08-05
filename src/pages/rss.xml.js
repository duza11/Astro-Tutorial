import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astroチュートリアルブログ',
    description: 'Astroを学ぶブログ',
    site: 'https://flourishing-smakager-4050c1.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}
