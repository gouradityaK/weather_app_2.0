// import './globals.css'

// export const metadata = {
//   title: 'Weather App',
//   description: 'Check weather worldwide',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-100">
//         {children}
//       </body>
//     </html>
//   )
// }

import './globals.css'

export const metadata = {
  title: 'Weather Forecast',
  description: 'Real-time weather updates worldwide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {children}
        </main>
      </body>
    </html>
  )
}