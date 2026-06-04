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
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 text-crimson font-semibold text-sm mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>SHIPMENT TRACKING</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Track Your Shipment
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Real-time visibility across air, ocean, and ground. Enter your tracking number
              to get instant updates on your shipment's status.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-navy to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleTrack}
              className="flex gap-4 mb-12"
            >
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g., HKG-AMS-8842)"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson text-lg"
                aria-label="Enter tracking number"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-crimson text-white rounded-lg font-bold text-lg hover:bg-crimson/90 transition-colors whitespace-nowrap"
              >
                Track
              </button>
            </motion.form>

            {trackingResult.status === 'processing' && trackingNumber && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 border-4 border-crimson border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-300">Tracking your shipment...</p>
              </motion.div>
            )}

            {trackingResult.status === 'found' && trackingResult.data && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex justify-between items-start mb-8 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {trackingResult.data.trackingNumber}
                    </h3>
                    <p className="text-gray-400">
                      {trackingResult.data.status} — {trackingResult.data.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">ETA</div>
                    <div className="text-xl font-bold text-crimson">
                      {trackingResult.data.eta}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                    {trackingResult.data?.history.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            event.completed
                              ? 'bg-green-500'
                              : 'bg-crimson animate-pulse'
                          }`}
                        >
                          {event.completed ? '✓' : '●'}
                        </div>
                        {trackingResult.data && index < trackingResult.data.history.length - 1 && (
                          <div className="w-0.5 h-16 bg-white/20 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h4 className="text-white font-semibold mb-1">
                          {event.status}
                        </h4>
                        <p className="text-gray-400 text-sm">{event.location}</p>
                        <p className="text-gray-500 text-sm mt-1">{event.date}</p>
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
                className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ❌
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Shipment Not Found
                </h3>
                <p className="text-gray-300 mb-4">
                  We couldn't find a shipment with tracking number "{trackingNumber}"
                </p>
                <p className="text-gray-400 text-sm">
                  Try: HKG-AMS-8842 for a demo
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Tracking?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is available 24/7 to help you with any tracking
              questions or concerns.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-crimson text-white rounded-sm font-bold text-lg hover:bg-crimson/90 transition-colors"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}