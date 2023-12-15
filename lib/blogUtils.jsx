// blogUtils.js
import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: 'master'
});

// Fetch blog posts from Contentful
export async function getBlogPosts() {
  try {
    const response = await client.getEntries({
      content_type: 'blogposts', // Replace 'blogPost' with your actual content type ID
      order: '-sys.createdAt', // Sort by creation date, showing the newest first
      limit: 10, // Adjust the limit as needed
    });

    // Extract and return blog posts from the response
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return []; // Return an empty array if there's an error
  }
}

// Function to get the latest blog posts
export async function getLatestBlogPosts(limit = 4) {
  // Fetch all blog posts
  const blogPosts = await getBlogPosts();
  // Get the latest 'limit' number of posts
  const latestPosts = blogPosts.slice(0, limit);
  return latestPosts;
}
