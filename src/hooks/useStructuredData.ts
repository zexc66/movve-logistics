import { useEffect } from 'react'

export function useStructuredData(data: object) {
  const serialized = JSON.stringify(data)

  useEffect(() => {
    const SCRIPT_ID = 'page-structured-data'

    document.getElementById(SCRIPT_ID)?.remove()

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = SCRIPT_ID
    script.textContent = serialized
    document.head.appendChild(script)

    return () => {
      document.getElementById(SCRIPT_ID)?.remove()
    }
  }, [serialized])
}
