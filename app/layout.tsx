import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedSnap – Visual Pill Tracking with Photo Verification',
  description: 'Take photos of your pills, let AI verify correct medication and dosage, and track adherence patterns. Perfect for elderly patients, chronic disease patients, and caregivers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a341c274-348d-4bcb-a41d-f08e4fe92600"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
