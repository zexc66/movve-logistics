import { useEffect } from 'react'

const BASE_URL = 'https://movve.com'

export function useDocumentTitle(title: string, description?: string, noindex?: boolean) {
  useEffect(() => {
    document.title = title

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) metaDescription.setAttribute('content', description)

      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) ogDescription.setAttribute('content', description)

      const twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) twitterDescription.setAttribute('content', description)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', title)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', BASE_URL + window.location.pathname)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', BASE_URL + window.location.pathname)
    }

    let robotsMeta = document.querySelector('meta[name="robots"]')
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta')
        robotsMeta.setAttribute('name', 'robots')
        document.head.appendChild(robotsMeta)
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow')
    } else if (robotsMeta) {
      robotsMeta.remove()
    }
  }, [title, description, noindex])
}
