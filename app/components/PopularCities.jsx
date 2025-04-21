'use client'

import Link from 'next/link'

export default function PopularCities() {
  const cities = [
    'Delhi', 'Mumbai', 'Chennai', 'Nagpur', 'Pune',
    'Karnataka', 'Kochi', 'Hyderabad', 'Kolkata', 'Jaipur',
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Popular Cities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {cities.map(city => (
          <Link
            key={city}
            href={`/${city}`}
            className="bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-lg text-center shadow-sm text-black"
          >
            {city}
          </Link>
        ))}
      </div>
    </div>
  )
}

