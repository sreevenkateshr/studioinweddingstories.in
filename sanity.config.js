import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'Studio in Wedding Photography',

  // Hardcode projectId and dataset for now
  projectId: 'gc2l8oot',      // <-- your Sanity project ID
  dataset: 'production',       // <-- your dataset

  plugins: [deskTool()],
})
