'use client'

export default function SearchBar({ handleSearch }) {
  return (
    <form action={handleSearch} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          name="city"
          placeholder="Search for a city..."
          className="flex-grow px-4 py-2 border rounded-lg"
          required
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  )
}

