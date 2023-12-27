import { Pinecone } from '@pinecone-database/pinecone'

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
  // environment: 'us-central1-gcp',
  environment: 'gcp-starter',
})


