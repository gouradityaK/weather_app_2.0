// 'use client'

// import { useState, useEffect } from 'react'
// import axios from 'axios'

// export default function WeatherCard({ city }) {
//   const [weather, setWeather] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [unit, setUnit] = useState('metric')

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         setLoading(true)
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=${unit}`
//         )
//         setWeather(response.data)
//         setError(null)
//       } catch (err) {
//         setError('City not found. Please try another location.')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchWeather()
//   }, [city, unit])

//   const getWeatherIcon = (condition) => {
//     const iconMap = {
//       'Clear': '☀️',
//       'Clouds': '☁️',
//       'Rain': '🌧️',
//       'Snow': '❄️',
//       'Thunderstorm': '⛈️',
//       'Drizzle': '🌦️',
//       'Mist': '🌫️',
//     }
//     return iconMap[condition] || '🌤️'
//   }

//   if (loading) return <div className="text-center py-8">Loading...</div>
//   if (error) return <div className="text-red-500 text-center py-8">{error}</div>

//   return (
//     <div className="max-w-md mx-auto rounded-lg shadow-md overflow-hidden bg-amber-200">
//       <div className="p-6">
//         <div className="flex justify-between items-start">
//           <div>
//             <h2 className="text-xl font-bold">
//               {weather.name}, {weather.sys.country}
//             </h2>
//             <p className="text-gray-500 text-sm">
//               {new Date(weather.dt * 1000).toLocaleDateString('en-US', {
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//               })}
//             </p>
//           </div>
//           <div className="text-4xl">
//             {getWeatherIcon(weather.weather[0].main)}
//           </div>
//         </div>

//         <div className="mt-4 flex justify-between items-center">
//           <div className="text-4xl font-bold">
//             {Math.round(weather.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
//           </div>
//           <div className="text-right">
//             <p className="text-lg capitalize">{weather.weather[0].description}</p>
//             <p>Feels like: {Math.round(weather.main.feels_like)}°{unit === 'metric' ? 'C' : 'F'}</p>
//           </div>
//         </div>

//         <div className="mt-6 grid grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm text-gray-500">Humidity</p>
//             <p>{weather.main.humidity}%</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Wind</p>
//             <p>{weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Pressure</p>
//             <p>{weather.main.pressure} hPa</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Visibility</p>
//             <p>{(weather.visibility / 1000).toFixed(1)} km</p>
//           </div>
//         </div>

//         <button 
//           onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
//           className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//         >
//           Switch to {unit === 'metric' ? '°F' : '°C'}
//         </button>
//       </div>
//     </div>
//   )
// }



'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState('metric')

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=${unit}`
        )
        setWeather(response.data)
        setError(null)
      } catch (err) {
        setError('City not found. Please try another location.')
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [city, unit])

  const getWeatherIcon = (condition) => {
    const iconMap = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Snow': '❄️',
      'Thunderstorm': '⛈️',
      'Drizzle': '🌦️',
      'Mist': '🌫️',
    }
    return iconMap[condition] || '🌤️'
  }

  if (loading) return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading weather data...</p>
    </div>
  )

  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg max-w-md mx-auto">
      <div className="flex">
        <div className="flex-shrink-0">
          <span className="text-red-500">⚠️</span>
        </div>
        <div className="ml-3">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-md mx-auto rounded-xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 text-white animate-fade-in">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-blue-100 text-sm">
              {new Date(weather.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="text-5xl">
            {getWeatherIcon(weather.weather[0].main)}
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-5xl font-bold">
            {Math.round(weather.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
          </div>
          <div className="text-right">
            <p className="text-lg capitalize">{weather.weather[0].description}</p>
            <p className="text-blue-100">Feels like: {Math.round(weather.main.feels_like)}°{unit === 'metric' ? 'C' : 'F'}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <p className="text-blue-100">Humidity</p>
            <p className="text-xl font-semibold">{weather.main.humidity}%</p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <p className="text-blue-100">Wind</p>
            <p className="text-xl font-semibold">{weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <p className="text-blue-100">Pressure</p>
            <p className="text-xl font-semibold">{weather.main.pressure} hPa</p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <p className="text-blue-100">Visibility</p>
            <p className="text-xl font-semibold">{(weather.visibility / 1000).toFixed(1)} km</p>
          </div>
        </div>

        <button
          onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
          className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg transition-colors font-medium backdrop-blur-sm"
        >
          Switch to {unit === 'metric' ? '°F' : '°C'}
        </button>
      </div>
    </div>
  )
}