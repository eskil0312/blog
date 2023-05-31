export interface ViewCounterProps {
  slug: string
  className?: string
}
export function ViewCounter({ slug, className }: ViewCounterProps) {
  let views = Number(0)

  return <span className={className}>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>
}
