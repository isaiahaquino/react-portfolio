import './globals.css'

export const metadata = {
  title: 'Isaiah Aquino | Front-End Developer',
  description: 'My Front-End Web Developer Portfolio',
  keywords: ['Next.js', 'React', 'JavaScript', 'Isaiah', 'Aquino', 'Front-end', 'Portfolio'],
  creator: 'Isaiah Aquino',
  icons: {
    icon: [{url: '/sunset_icon_246575.ico'}],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
        {children}
      </body>
    </html>
  )
}
