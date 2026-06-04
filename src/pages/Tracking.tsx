import { useState } from 'react'
import { motion } from 'framer-motion'

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingStatus, setTrackingStatus] = useState<'processing' | 'found' | 'not-found'>('processing')
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
    <div className="min-h-screen bg-brand-primary">
      {/* Header Section */}
      <div className="border-b border-brand-border">
        <div className="container mx-auto px-4 py-space-3xl">
          <div className="text-center">
            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Shipment Tracking
            </h1>
            <p className="text-brand-secondary-light text-body text-xl max-w-2xl mx-auto">
              Enter your tracking number to get real-time updates on your shipment status
            </p>
          </div>
        </div>
      </div>

      {/* Tracking Input Section */}
      <div className="container mx-auto px-4 py-space-3xl">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-space-2xl">
            <div className="flex flex-col sm:flex-row gap-space-md">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g., MOVVE123456)"
                className="flex-1 px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
              />
              <button
                type="submit"
                disabled={!trackingNumber.trim()}
                className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold hover:bg-brand-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Track
              </button>
            </div>
          </form>

          {/* Processing State */}
          {trackingStatus === 'processing' && (
            <div className="text-center py-space-xl">
              <div className="inline-flex items-center gap-space-sm text-brand-accent text-brand-body">
                <div className="w-6 h-6 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
                <span>Searching for shipment...</span>
              </div>
            </div>
          )}

          {/* Not Found State */}
          {trackingStatus === 'not-found' && (
            <div className="p-space-lg border-2 border-brand-error bg-brand-error/5 text-center">
              <div className="w-16 h-16 bg-brand-error rounded-full flex items-center justify-center text-brand-surface mx-auto mb-space-md">
                ✕
              </div>
              <h3 className="font-display text-h3 font-bold text-brand-error mb-space-sm">
                Shipment Not Found
              </h3>
              <p className="text-brand-error-light">
                No shipment found with tracking number "{trackingNumber}". Please check the number and try again.
              </p>
            </div>
          )}

          {/* Found State */}
          {trackingStatus === 'found' && shipmentData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-space-xl"
            >
              {/* Status Overview */}
              <div className="p-space-xl border-2 border-brand-success bg-brand-success/5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-space-md mb-space-lg">
                  <div>
                    <div className="flex items-center gap-space-sm mb-space-sm">
                      <div className="w-8 h-8 bg-brand-success rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <h3 className="font-display text-h3 font-bold text-brand-success">
                        {shipmentData.status}
                      </h3>
                    </div>
                    <p className="text-brand-muted text-sm">
                      Tracking Number: {shipmentData.trackingNumber}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-muted text-sm mb-space-xs">
                      Current Location
                    </p>
                    <p className="font-display text-h3 font-bold text-brand-surface">
                      {shipmentData.location}
                    </p>
                  </div>
                </div>
                <div className="border-t border-brand-success/30 pt-space-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-brand-muted text-sm mb-space-xs">
                        Estimated Delivery
                      </p>
                      <p className="font-display text-h3 font-bold text-brand-surface">
                        {shipmentData.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-space-xl border border-brand-border bg-brand-surface">
                <h3 className="font-display text-h3 font-bold text-brand-text mb-space-lg">
                  Shipment Timeline
                </h3>
                <div className="space-y-space-md">
                  {shipmentData.timeline.map((event, index) => (
                    <div key={index} className="flex gap-space-md">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                        {index < shipmentData.timeline.length - 1 && (
                          <div className="w-px h-full bg-brand-border min-h-[2rem]"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-space-md">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-space-xs mb-space-xs">
                          <h4 className="font-display text-h3 font-bold text-brand-text">
                            {event.event}
                          </h4>
                          <span className="text-brand-muted text-sm">
                            {event.date}
                          </span>
                        </div>
                        <p className="text-brand-muted text-sm">
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
          <div className="mt-space-2xl p-space-lg border border-brand-border bg-brand-surface/30">
            <h3 className="font-display text-h3 font-bold text-brand-text mb-space-md">
              Need Help?
            </h3>
            <div className="space-y-space-sm text-brand-muted text-sm">
              <p>
                • Make sure you entered the correct tracking number
              </p>
              <p>
                • Tracking numbers are usually 8-15 characters long
              </p>
              <p>
                • Contact our support team if you need assistance
              </p>
            </div>
            <div className="mt-space-md">
              <button className="px-space-lg py-space-md bg-brand-accent text-brand-surface font-display font-semibold hover:bg-brand-accent-dark transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}