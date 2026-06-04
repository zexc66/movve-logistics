import { useState } from 'react'
import { motion } from 'framer-motion'

interface TrackingStatus {
  status: 'processing' | 'found' | 'not-found'
  data?: {
    trackingNumber: string
    status: string
    location: string
    eta: string
    history: Array<{
      date: string
      status: string
      location: string
      completed: boolean
    }>
  }
}

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<TrackingStatus>({
    status: 'processing',
  })

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    setTrackingResult({ status: 'processing' })

    setTimeout(() => {
      if (trackingNumber.toUpperCase() === 'HKG-AMS-8842') {
        setTrackingResult({
          status: 'found',
          data: {
            trackingNumber: trackingNumber.toUpperCase(),
            status: 'In Transit',
            location: 'En route to Amsterdam',
            eta: 'May 20, 2026',
            history: [
              {
                date: 'May 15, 2026 - 09:42',
                status: 'Order Confirmed',
                location: 'Shanghai, CN',
                completed: true,
              },
              {
                date: 'May 16, 2026 - 14:30',
                status: 'Departed Origin Port',
                location: 'Hong Kong',
                completed: true,
              },
              {
                date: 'May 18, 2026 - 08:00',
                status: 'In Transit — Air Freight',
                location: 'En route to Amsterdam',
                completed: true,
              },
              {
                date: 'May 20, 2026',
                status: 'Last Mile Delivery',
                location: 'Amsterdam, NL',
                completed: false,
              },
            ],
          },
        })
      } else {
        setTrackingResult({ status: 'not-found' })
      }
    }, 1500)
  }

  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                Shipment Tracking
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>

            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Track Your Shipment
            </h1>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-2xl">
              Real-time visibility across air, ocean, and ground transport. Enter your tracking
              number to get instant status updates.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="mb-space-sm">
                <label htmlFor="tracking-input" className="block text-brand-muted text-sm font-semibold mb-space-sm">
                  Tracking Number
                </label>
              </div>
              <form onSubmit={handleTrack} className="flex gap-space-sm">
                <input
                  type="text"
                  id="tracking-input"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="e.g., HKG-AMS-8842"
                  className="flex-1 px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text font-body text-lg placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                  aria-label="Enter tracking number"
                />
                <button
                  type="submit"
                  disabled={trackingResult.status === 'processing'}
                  className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-commanding"
                >
                  {trackingResult.status === 'processing' ? 'Tracking...' : 'Track'}
                </button>
              </form>

              <p className="mt-space-md text-brand-muted text-sm">
                Demo tracking number: HKG-AMS-8842
              </p>
            </div>

            {trackingResult.status === 'processing' && trackingNumber && (
              <div className="text-center py-space-2xl">
                <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full flex items-center justify-center mx-auto mb-space-md animate-spin">
                </div>
                <p className="text-brand-secondary-light">Tracking your shipment...</p>
              </div>
            )}

            {trackingResult.status === 'found' && trackingResult.data && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-space-xl p-space-xl border border-brand-border bg-brand-surface"
              >
                <div className="flex justify-between items-start mb-space-lg pb-space-lg border-b border-brand-border/50">
                  <div>
                    <h3 className="font-display text-h2 font-bold text-brand-primary mb-1">
                      {trackingResult.data.trackingNumber}
                    </h3>
                    <p className="text-brand-muted">
                      {trackingResult.data.status} — {trackingResult.data.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-muted text-sm uppercase tracking-wider mb-1">
                      ETA
                    </p>
                    <div className="text-brand-accent font-display text-h1 font-bold">
                      {trackingResult.data.eta}
                    </div>
                  </div>
                </div>

                <div className="space-y-space-lg">
                  {trackingResult.data.history.map((event, index) => (
                    <div key={index} className="flex gap-space-md">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold ${
                          event.completed
                            ? 'bg-brand-success text-brand-surface'
                            : 'bg-brand-accent text-brand-surface animate-pulse'
                        }`}>
                          {event.completed ? '✓' : '●'}
                        </div>
                      </div>
                      <div className="flex-1 pb-space-lg">
                        <h4 className="font-display text-h3 font-bold text-brand-primary mb-1">
                          {event.status}
                        </h4>
                        <p className="text-brand-muted text-sm">
                          {event.location}
                        </p>
                        <p className="text-brand-muted text-xs mt-1">
                          {event.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {trackingResult.status === 'not-found' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-space-xl p-space-xl border-2 border-brand-error bg-brand-error/5 text-center"
              >
                <div className="flex items-center justify-center gap-space-sm mb-space-md">
                  <span className="w-12 h-12 flex items-center justify-center text-brand-error">
                    ✕
                  </span>
                  <h3 className="font-display text-h2 font-bold text-brand-error">
                    Shipment Not Found
                  </h3>
                </div>
                <p className="text-brand-muted mb-space-md">
                  We couldn't find a shipment with tracking number "{trackingNumber}"
                </p>
                <p className="text-brand-secondary text-sm">
                  Try: HKG-AMS-8842 for a demo
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
            Need Help Tracking?
          </h2>
          <p className="text-brand-secondary-light text-body text-xl mb-space-2xl max-w-3xl mx-auto">
            Our support team is available 24/7 to help with any tracking questions or
            concerns.
          </p>
          <a
            href="/contact"
            className="inline-block px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors shadow-commanding"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  )
}