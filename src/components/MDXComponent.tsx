import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { Image } from './Image'
import { Link } from './Link'
import { Pre } from './Pre'
import { MdxLayoutRendererProps } from '@/types/mdx'
import { MDXContentProps } from 'mdx-bundler/dist/types'

const MDXComponents: MDXContentProps['components'] = {
  Image,
  a: Link,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export function MDXLayoutRenderer({ layout, mdxSource, ...rest }: MdxLayoutRendererProps) {
  let MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
