// 'use client'

// export default function SearchBar({ handleSearch }) {
//   return (
//     <form action={handleSearch} className="mb-8">
//       <div className="flex gap-2">
//         <input
//           type="text"
//           name="city"
//           placeholder="Search for a city..."
//           className="flex-grow px-4 py-2 border rounded-lg"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   )
// }



'use client'

export default function SearchBar({ handleSearch }) {
  return (
    <form action={handleSearch} className="mb-8">
      <div className="flex gap-2 shadow-lg">
        <input
          type="text"
          name="city"
          placeholder="Search for a city..."
          className="flex-grow px-6 py-3 border-0 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-r-xl hover:from-blue-600 hover:to-indigo-700 transition-colors font-medium"
        >
          Search
        </button>
      </div>
    </form>
  )
}