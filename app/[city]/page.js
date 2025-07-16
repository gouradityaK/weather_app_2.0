// import Link from 'next/link'
// import WeatherCard from '../components/WeatherCard'

// export default function CityPage({ params }) {
//   return (
//     <div className="container mx-auto-screen px-4 py-8 ">
//       <Link href="/" className="text-blue-800 hover:underline mb-4 inline-block">
//         ← Back to home
//       </Link>
//       <WeatherCard city={params.city} />
//     </div>
//   )
// }



import Link from 'next/link'
import WeatherCard from '../components/WeatherCard'

export default function CityPage({ params }) {
  // No async needed here - params is automatically populated by Next.js
  const city = decodeURIComponent(params.city) // Decode the city name if it has special characters

  return (
    <div className="animate-fade-in">
      <Link 
        href="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to home
      </Link>
      <WeatherCard city={city} />
    </div>
  )
}