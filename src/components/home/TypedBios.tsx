import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

export function TypedBios() {
  const el = useRef(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed?.current?.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I live in <b className="font-medium">Oslo, Norway</b>.
        </li>

        <li>I love web development.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
