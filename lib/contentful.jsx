import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

export async function getBlogPosts(page = 1, perPage = 3) {
  const entries = await client.getEntries({ content_type: 'homestays', skip: (page - 1) * perPage, limit: perPage, });
  
  return entries.items;
}

export async function getBlogPostBySlug(slug) {
  const entry = await client.getEntries({
    content_type: 'homestays',
    'fields.slug': slug,
  });

  return entry.items[0];
}
