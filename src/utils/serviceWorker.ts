import { Workbox } from 'workbox-window'

let wb: Workbox | null

if ('serviceWorker' in navigator) {
  wb = new Workbox('/sw.js', { scope: '/' })

  wb.addEventListener('controlling', () => {
    window.location.reload()
  })

  wb.addEventListener('activated', (event) => {
    if (event.isUpdate) {
      window.location.reload()
    }
  })

  wb.register()
}