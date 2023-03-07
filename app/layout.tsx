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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'use-credentials'} />
        <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet" />
      </head>
      <body className='bg-black'>
        {children}
      </body>
    </html>
  )
}
