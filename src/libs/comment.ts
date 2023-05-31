import { commentConfig } from '@/data/siteMetadata'
export type CommentConfigType = typeof commentConfig
// This is a temporary workaround for the fact that the `mdx-bundler` & `esbuild`
// is not working with the NextJS's public variables.
export function getCommentConfigs(): Partial<CommentConfigType> {
  return {
    ...commentConfig,
    giscusConfig: {
      ...commentConfig.giscusConfig,
      repo: process.env.GISCUS_REPO || "",
      repositoryId: process.env.GISCUS_REPOSITORY_ID || "",
      category: process.env.GISCUS_CATEGORY || "",
      categoryId: process.env.GISCUS_CATEGORY_ID || "",
    },
    utterancesConfig: {
      ...commentConfig.utterancesConfig,
      repo: process.env.UTTERANCES_REPO || "",
    },
    disqus: {
      shortname: process.env.DISQUS_SHORTNAME || "",
    },
  }
}