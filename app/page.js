// // 

// import { redirect } from 'next/navigation'
// import SearchBar from './components/SearchBar'
// import PopularCities from './components/PopularCities'

// export default function Home() {
//   async function handleSearch(formData) {
//     'use server'
//     const city = formData.get('city')
//     redirect(`/${city}`)
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Weather App</h1>
//       <SearchBar handleSearch={handleSearch} />
//       <PopularCities />
//     </div>
//   )
// }

import { redirect } from 'next/navigation'
import SearchBar from './components/SearchBar'
import PopularCities from './components/PopularCities'

export default function Home() {
  async function handleSearch(formData) {
    'use server'
    const city = formData.get('city')
    redirect(`/${city}`)
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Weather Forecast</h1>
        <p className="text-gray-600">Get real-time weather updates for any location</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <SearchBar handleSearch={handleSearch} />
        <div className="bg-white rounded-xl shadow-lg p-6">
          <PopularCities />
        </div>
      </div>
    </div>
  )
}