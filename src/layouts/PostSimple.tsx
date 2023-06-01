import Comments from "@/components/Comments"
import { PageTitle } from "@/components/PageTitle"
import { BlogSeo } from "@/components/SEO"
import { ScrollTopButton } from "@/components/ScrollToTopButton"
import { SectionContainer } from "@/components/SectionContainer"
import { SocialButtons } from "@/components/SocialButtons"
import { BlogMeta } from "@/components/blog/BlogMeta"
import { BlogTags } from "@/components/blog/BlogTags"
import { siteMetadata } from "@/data/siteMetadata"
import { PostSimpleLayoutProps } from "@/types/layout"


export function PostSimple(props: PostSimpleLayoutProps) {
  let { frontMatter, type, children, authorDetails, commentConfig } = props
  let { date, title, slug, fileName, tags, readingTime } = frontMatter
  let postUrl = `${siteMetadata.siteUrl}/${type}/${slug}`

  return (
    <SectionContainer>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/${type}/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopButton />
      <article>
        <div>
          <header className="py-6 xl:pb-16 xl:pt-16">
            <div className="space-y-4">
              <BlogTags tags={tags} />
              <PageTitle>{title}</PageTitle>
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <BlogMeta date={date} slug={slug} readingTime={readingTime} />
                </div>
              </dl>
            </div>
          </header>
          <div className="pb-8" style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose prose-lg max-w-none pb-8 dark:prose-dark md:prose-xl">
                {children}
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <SocialButtons postUrl={postUrl} title={title} fileName={fileName} />
                <Comments frontMatter={frontMatter} config={commentConfig} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

export default PostSimple