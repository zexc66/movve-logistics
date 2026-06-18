import { useEffect } from 'react'

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }
  }, [title, description])
}
