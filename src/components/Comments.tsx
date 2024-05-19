import React, { useEffect } from 'react'
import { useAppSelector } from '../state/hooks'

const Comments: React.FC = () => {
  //theme
  const theme = useAppSelector((state: any) => state.theme)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('defer', 'defer')
    script.setAttribute('data-repo', 'nullchemy/nullchemy')
    script.setAttribute('data-repoid', 'R_kgDOJSgtNw')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-categoryid', 'DIC_kwDOJSgtN84CaoPg')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-term', 'Welcome to giscus!')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', theme)
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')

    document.getElementById('comments')?.appendChild(script)
  }, [theme])

  return <div id="comments" />
}

export default Comments
