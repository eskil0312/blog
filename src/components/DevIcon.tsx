import React from '@/icons/react.svg'
import NextJS from '@/icons/nextjs.svg'
import TailwindCSS from '@/icons/tailwind.svg'
import Typescript from '@/icons/typescript.svg'

export let DevIconsMap = {
  React,
  NextJS,
  TailwindCSS,
  Typescript
}

export function DevIcon(props: { type: keyof typeof DevIconsMap; className?: string }) {
  let { type, className } = props
  let Icon = DevIconsMap[type]
  if (!Icon) return <div>Missing icon</div>

  let defaultClass = 'h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24'
  return <Icon className={className || defaultClass} fill="currentColor" />
}
