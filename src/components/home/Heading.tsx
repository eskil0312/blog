import { siteMetadata } from '@/data/siteMetadata'
import Twemoji from '../Twemoji'

export function Heading() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I am <span className="font-medium">{siteMetadata.fullName}</span> - a dedicated{' '}
      <span className="font-medium">Software Engineer</span> in{' '}
      <span className="hidden font-medium">Oslo</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-norway" />
      </span>
    </h1>
  )
}
