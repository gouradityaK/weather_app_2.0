// 'use client'

// import Link from 'next/link'

// export default function PopularCities() {
//   const cities = [
//     'Delhi', 'Mumbai', 'Chennai', 'Nagpur', 'Pune',
//     'Karnataka', 'Kochi', 'Hyderabad', 'Kolkata', 'Jaipur',
//   ]

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Popular Cities</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
//         {cities.map(city => (
//           <Link
//             key={city}
//             href={`/${city}`}
//             className="bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-lg text-center shadow-sm text-black"
//           >
//             {city}
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }



'use client'

import Link from 'next/link'

export default function PopularCities() {
  const cities = [
    'Delhi', 'Mumbai', 'Chennai', 'Nagpur', 'Pune',
    'Karnataka', 'Kochi', 'Hyderabad', 'Kolkata', 'Jaipur',
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Popular Cities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {cities.map(city => (
          <Link
            key={city}
            href={`/${city}`}
            className="bg-white hover:bg-blue-50 px-4 py-3 rounded-lg text-center shadow-sm text-gray-800 font-medium transition-all hover:shadow-md hover:-translate-y-0.5 border border-gray-100"
          >
            {city}
          </Link>
        ))}
      </div>
    </div>
  )
}