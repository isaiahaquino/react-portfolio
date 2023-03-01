import './globals.css'

export const metadata = {
  title: 'Isaiah Aquino Portfolio',
  description: 'My Front-End Web Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
