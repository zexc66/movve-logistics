/* global process */
import workboxBuild from 'workbox-build'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const buildSW = () => {
  return workboxBuild.injectManifest({
    swSrc: path.join(__dirname, 'src', 'sw.js'),
    swDest: path.join(__dirname, 'dist', 'sw.js'),
    globDirectory: path.join(__dirname, 'dist'),
    globPatterns: ['**/*.{js,css,html,woff2,png,webp,svg}'],
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  }).then(({ count, size, warnings }) => {
    warnings.forEach(console.warn)
    console.log(`${count} files will be precached, totaling ${size} bytes.`)
  })
}

buildSW().catch((err) => {
  console.error('Service worker build failed:', err)
  process.exit(1)
})