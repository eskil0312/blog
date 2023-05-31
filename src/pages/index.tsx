import { Greeting } from '@/components/home/Greeting'
import { Heading } from '@/components/home/Heading'
import { TypedBios } from '@/components/home/TypedBios'
import { ShortDescription } from '@/components/home/ShortDescription'
import Twemoji from '@/components/Twemoji'
import { BlogLinks } from '@/components/home/BlogLinks'
import { FeaturedPosts } from '@/components/home/FeaturedPosts'
import { getAllFilesFrontMatter } from '@/libs/mdx'
import { BlogFrontMatter } from '@/types/mdx'
import { ProfileCard } from '@/components/ProfileCard'

export function getStaticProps() {
  let posts = getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
          <div className="md:pr-8 xl:col-span-2">
            <Greeting />
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <Heading />
              <TypedBios />
              <ShortDescription />
              <BlogLinks />
              <p className="my-8 flex">
                <span className="mr-2">Happy reading</span>
                <Twemoji emoji="clinking-beer-mugs" />
              </p>
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>
      <FeaturedPosts posts={posts} />
    </>
  )
}
