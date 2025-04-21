import Link from 'next/link'
import WeatherCard from '../components/WeatherCard'

export default function CityPage({ params }) {
  return (
    <div className="container mx-auto-screen px-4 py-8 ">
      <Link href="/" className="text-blue-800 hover:underline mb-4 inline-block">
        ← Back to home
      </Link>
      <WeatherCard city={params.city} />
    </div>
  )
}

