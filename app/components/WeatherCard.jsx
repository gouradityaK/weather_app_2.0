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

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>

  return (
    <div className="max-w-md mx-auto rounded-lg shadow-md overflow-hidden bg-amber-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-gray-500 text-sm">
              {new Date(weather.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="text-4xl">
            {getWeatherIcon(weather.weather[0].main)}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-4xl font-bold">
            {Math.round(weather.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
          </div>
          <div className="text-right">
            <p className="text-lg capitalize">{weather.weather[0].description}</p>
            <p>Feels like: {Math.round(weather.main.feels_like)}°{unit === 'metric' ? 'C' : 'F'}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p>{weather.main.humidity}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Wind</p>
            <p>{weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pressure</p>
            <p>{weather.main.pressure} hPa</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Visibility</p>
            <p>{(weather.visibility / 1000).toFixed(1)} km</p>
          </div>
        </div>

        <button 
          onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Switch to {unit === 'metric' ? '°F' : '°C'}
        </button>
      </div>
    </div>
  )
}

