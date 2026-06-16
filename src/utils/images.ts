/**
 * MOVVE Logistics — Curated Image Library
 * All images from Unsplash (free for commercial use, Unsplash License).
 * Uses Unsplash CDN with size parameters for responsive delivery.
 *
 * URL format: https://images.unsplash.com/photo-{ID}?w={WIDTH}&q=80&auto=format&fit=crop
 *
 * All photo IDs verified as free-license (not Unsplash+) via download redirect.
 */

// --- Size presets ---
export const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

// --- Hero / Banner (1920px wide) ---
export const HERO_PORT_AERIAL = img('1769144256227-5185141c3aca', 1920)   // Aerial stacked containers at port (37mW7MvAOvU)

// --- Services (800px) ---
export const AIR_FREIGHT = img('1774698078446-59299e016718', 800)          // Cargo plane on tarmac (85gDb_IHdAQ)
export const OCEAN_FREIGHT = img('1759272840712-c7e5ea852367', 800)       // Busy shipping port with containers (JJCrTi0lvTs)
export const GROUND_TRANSPORT = img('1762313271324-5de19fb37c7f', 800)    // Freight & ground logistics (y5-qvWzqFkE)
export const WAREHOUSING = img('1750033944102-644d065e12b1', 800)         // Warehouse operations (3thV4UpCDY8)
export const CUSTOMS_BROKERAGE = img('1640529494825-4add7eed660e', 800)   // Port/docks logistics (iDlVmSKg_Is)
export const SUPPLY_CHAIN_INTELLIGENCE = img('1771923082503-0a3381c46cef', 800) // Dark analytics dashboard (6-0ajRI1cgs)

// --- About Page ---
export const ABOUT_HERO = img('1723134085573-67cbef4d5bd0', 1200)        // Logistics operations (sAue4xwd1zE)
export const TEAM_OPERATIONS = img('1758518730151-cf64fddb4f0a', 800)     // Business professionals collaborating (Cnsh9WwhVCw)
export const WAREHOUSE_OPERATIONS = img('1768677859674-42c517273db8', 800) // Warehouse/logistics ops (Ru635lrpsOA)

// --- Blog Thumbnails (600px) ---
export const BLOG_AI_LOGISTICS = img('1771923082503-0a3381c46cef', 600)   // Analytics/tech dashboard
export const BLOG_SUSTAINABILITY = img('1759272840712-c7e5ea852367', 600) // Shipping port / ocean
export const BLOG_COLD_CHAIN = img('1750033944102-644d065e12b1', 600)     // Warehouse
export const BLOG_GLOBAL_TRADE = img('1769144256227-5185141c3aca', 600)   // Aerial containers
export const BLOG_RESILIENT_SUPPLY = img('1768677859674-42c517273db8', 600) // Logistics operations
export const BLOG_ECOMMERCE = img('1767868278896-2ec1025d7424', 600)      // Freight/logistics (YoY3ourlPco)

// --- Careers ---
export const TEAM_CULTURE = img('1769739576456-0aefcff3f4b9', 1200)      // Team meeting in conference room (aNTsx7Fl4T0)
export const MODERN_OFFICE = img('1774600134168-b9ebd714e4e1', 800)      // Team collaborating on laptops (N3Bf0ArT5J0)

// --- Contact ---
export const CORPORATE_OFFICE = img('1723134085573-67cbef4d5bd0', 1200)   // Corporate logistics operations

// --- Tracking ---
export const PACKAGE_DELIVERY = img('1640529494825-4add7eed660e', 1200)   // Shipping/logistics hub

// --- Clients / Trust ---
export const LOGISTICS_FACILITY = img('1769144256227-5185141c3aca', 1200) // Large shipping port

/**
 * Helper: Generate srcSet string for responsive images
 */
export function srcSet(id: string): string {
  return [
    `${img(id, 400)} 400w`,
    `${img(id, 800)} 800w`,
    `${img(id, 1200)} 1200w`,
    `${img(id, 1920)} 1920w`,
  ].join(', ')
}
