import './globals.css'

export const metadata = {
  title: 'Weather App',
  description: 'Check weather worldwide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  )
}