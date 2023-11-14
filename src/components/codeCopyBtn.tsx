import React from 'react'
import { ReactComponent as Copy } from '../assets/svg/copy-solid.svg'
import { ReactComponent as Check } from '../assets/svg/check.svg'

export default function CodeCopyBtn({ children }: any) {
  const [copyOk, setCopyOk] = React.useState(false)
  const iconColor = copyOk ? '#0af20a' : '#ddd'
  const handleClick = (e: any) => {
    navigator.clipboard.writeText(children[0].props.children[0])
    setCopyOk(true)
    setTimeout(() => {
      setCopyOk(false)
    }, 500)
  }
  return (
    <div className="code-copy-btn">
      {copyOk ? (
        <Check onClick={handleClick} style={{ fill: iconColor }} />
      ) : (
        <Copy onClick={handleClick} style={{ fill: iconColor }} />
      )}
    </div>
  )
}
