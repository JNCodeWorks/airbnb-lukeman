// pages/api/contentful-webhook.js

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const payload = req.body; // Payload sent by Contentful
      const { entryId, contentType, action } = payload;

      // Fetch updated content from Contentful based on the information received
      try {
        const entry = await client.getEntry(entryId);
        // Process the fetched entry, update app state, cache, or database
        // For example, update a Redux store or directly set state
        // dispatch({ type: 'UPDATE_CONTENT', payload: entry.fields });

        return res.status(200).json({ message: 'Webhook received and processed successfully' });
      } catch (error) {
        console.error('Error fetching entry:', error);
        return res.status(500).json({ error: 'Error processing webhook' });
      }
    } catch (error) {
      console.error('Error processing webhook payload:', error);
      return res.status(500).json({ error: 'Error processing webhook' });
    }
  }

  // Handle non-POST requests
  res.status(400).json({ error: 'Invalid request method' });
}
