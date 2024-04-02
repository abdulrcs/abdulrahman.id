import { useEffect, useRef, useState } from 'react'

export default function useUtterances(commentNodeId, title) {
  const commentNodeRef = useRef()
  const [isCommentsLoading, setIsCommentsLoading] = useState(true)
  let intersectionObserver
  let mutationObserver
  let hasLoaded = false

  useEffect(() => {
    const injectScript = () => {
      if (hasLoaded) return

      const scriptParentNode = document.getElementById(commentNodeId)
      if (!scriptParentNode) return

      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', 'abdulrcs/abdulrahman.id')
      script.setAttribute('issue-term', title)
      script.setAttribute('theme', 'icy-dark')
      script.crossOrigin = 'anonymous'

      script.onload = () => setInterval(() => setIsCommentsLoading(false), 1000)

      scriptParentNode.appendChild(script)
      commentNodeRef.current = script

      hasLoaded = true
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          injectScript()
        }
      })
    }

    const mutationCallback = (mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const scriptParentNode = document.getElementById(commentNodeId)
          if (scriptParentNode) {
            if (!intersectionObserver) {
              intersectionObserver = new IntersectionObserver(observerCallback)
            }
            intersectionObserver.observe(scriptParentNode)
            observer.disconnect()
          }
        }
      }
    }

    if (!mutationObserver) {
      mutationObserver = new MutationObserver(mutationCallback)
    }

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    // Cleanup on unmount
    return () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect()
      }
      if (mutationObserver) {
        mutationObserver.disconnect()
      }
      const scriptParentNode = document.getElementById(commentNodeId)
      if (
        scriptParentNode &&
        commentNodeRef.current &&
        commentNodeRef.current.parentNode === scriptParentNode
      ) {
        scriptParentNode.removeChild(commentNodeRef.current)
      }
      hasLoaded = false
    }
  }, [commentNodeId, title])

  return { isCommentsLoading }
}
