// 

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Weather App</h1>
      <SearchBar handleSearch={handleSearch} />
      <PopularCities />
    </div>
  )
}