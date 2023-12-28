import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

export default client;

export async function getAirbnb() {
    try {
      const response = await client.getEntries({
        content_type: 'airbnb', // Replace 'blogPost' with your actual content type ID
        order: '-sys.createdAt', // Sort by creation date, showing the newest first
        limit: 10, // Adjust the limit as needed
      });
  
      // Extract and return blog posts from the response
      return response.items;
    } catch (error) {
      console.error('Error fetching airbnb listings:', error);
      return []; // Return an empty array if there's an error
    }
  }
  
  // Function to get the latest blog posts
  export async function getLatestAirbnb(limit = 5) {
    // Fetch all blog posts
    const Airbnb = await getAirbnb();
    // Get the latest 'limit' number of posts
    const LatestAirbnb = Airbnb.slice(0, limit);
    return LatestAirbnb;
  }