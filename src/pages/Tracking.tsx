import { useState } from 'react'
import { motion } from 'framer-motion'

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingStatus, setTrackingStatus] = useState<'idle' | 'processing' | 'found' | 'not-found'>('idle')
  const [shipmentData, setShipmentData] = useState<{
    trackingNumber: string
    status: string
    location: string
    estimatedDelivery: string
    timeline: Array<{
      date: string
      event: string
      location: string
    }>
  } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTrackingStatus('processing')

    setTimeout(() => {
      if (trackingNumber.toLowerCase() === 'movve123456' || trackingNumber.toLowerCase() === 'test') {
        setTrackingStatus('found')
        setShipmentData({
          trackingNumber,
          status: 'In Transit',
          location: 'Los Angeles, CA',
          estimatedDelivery: 'June 8, 2026',
          timeline: [
            { date: 'Jun 4, 2026 - 2:30 PM', event: 'Package picked up', location: 'San Francisco, CA' },
            { date: 'Jun 4, 2026 - 4:15 PM', event: 'Arrived at sorting facility', location: 'Oakland, CA' },
            { date: 'Jun 5, 2026 - 8:00 AM', event: 'Departed hub', location: 'Los Angeles, CA' },
            { date: 'Jun 6, 2026 - 1:20 PM', event: 'Out for delivery', location: 'Los Angeles, CA' },
          ]
        })
      } else {
        setTrackingStatus('not-found')
        setShipmentData(null)
      }
    }, 2000)
  }

  return (
    <>
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Track Your Shipment
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Enter your tracking number to get real-time updates on your shipment status,
              location, and estimated delivery time.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="tracking-number" className="block text-sm font-semibold text-slate-700 mb-3">
                    Tracking Number
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      id="tracking-number"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="Enter tracking number (e.g., MOVVE123456)"
                      disabled={trackingStatus === 'processing'}
                      className="flex-1 px-6 py-4 bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-300 transition-colors duration-200 rounded-lg text-lg"
                    />
                    <button
                      type="submit"
                      disabled={!trackingNumber.trim() || trackingStatus === 'processing'}
                      className="px-10 py-4 bg-slate-900 text-white font-semibold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-400 transition-colors duration-200 rounded-lg"
                    >
                      {trackingStatus === 'processing' ? 'Tracking...' : 'Track'}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Example: MOVVE123456 or test</p>
                </div>
              </form>

            {/* Processing State */}
            {trackingStatus === 'processing' && (
              <div className="mt-8 flex items-center justify-center py-12">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin" />
                  <span className="text-lg">Searching for shipment...</span>
                </div>
              </div>
            )}

            {/* Not Found State */}
            {trackingStatus === 'not-found' && (
              <div className="mt-8 p-10 bg-red-50 border-2 border-red-200 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      Shipment Not Found
                    </h3>
                    <p className="text-red-700">
                      No shipment found with tracking number "{trackingNumber}". Please check the number
                      and try again. For assistance, contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Found State */}
            {trackingStatus === 'found' && shipmentData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-8"
              >
                {/* Status Overview */}
                <div className="bg-white border-2 border-slate-200 p-10 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Status
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                        <p className="text-2xl font-bold text-slate-900">
                          {shipmentData.status}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Current Location
                      </p>
                      <p className="text-2xl font-bold text-slate-900">
                        {shipmentData.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Estimated Delivery
                      </p>
                      <p className="text-2xl font-bold text-slate-900">
                        {shipmentData.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-sm text-slate-600">
                      Tracking Number: <span className="font-semibold">{shipmentData.trackingNumber}</span>
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white border-2 border-slate-200 p-10 rounded-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">
                    Shipment Timeline
                  </h3>
                  <div className="space-y-8">
                    {shipmentData.timeline.map((event, index) => (
                      <div key={index} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-slate-900 rounded-full" />
                          {index < shipmentData.timeline.length - 1 && (
                            <div className="w-px h-full bg-slate-200 min-h-[3rem]" />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="mb-2">
                            <p className="text-lg font-bold text-slate-900 mb-1">
                              {event.event}
                            </p>
                            <p className="text-sm text-slate-600">
                              {event.date}
                            </p>
                          </div>
                          <p className="text-slate-600">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Help Text */}
            <div className="mt-12 p-8 bg-slate-100 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Need Help?
              </h3>
              <div className="space-y-3 text-slate-600">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Make sure you entered the correct tracking number</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tracking numbers are usually 8-15 characters long</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Contact our support team if you need assistance</span>
                </p>
              </div>
              <div className="mt-6">
                <button className="px-8 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors rounded-lg">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}