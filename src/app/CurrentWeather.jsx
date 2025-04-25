
"use client";
import { useEffect, useState } from "react";
import config from "./config";

export function CurrentWeather({ city, unit }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const res = await fetch(
          `${config.baseURL}/api/weather?city=${city}&units=${unit}`
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Failed to fetch current weather:", err);
      }
    };

    fetchCurrent();
  }, [city, unit]);

  if (!data) return <div className="text-sm">Loading current weather...</div>;

  return (
    <div className="flex flex-col items-center justify-between text-center p-4 h-full space-y-4">
      {/* City and Date */}
      <h2 className="text-xl font-semibold">{data.city}</h2>
      <div className="text-sm text-gray-500">{data.date}</div>
      
      {/* Weather Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.weather}
        className="w-20 h-20"
      />
      
      {/* Temperature */}
      <div className="text-3xl font-bold">{data.temperature}°</div>
      <div className="capitalize text-sm">{data.weather}</div>

      {/* Wind and Humidity */}
      <div className="text-xs mt-2">
        <strong>Wind:</strong> {data.wind_speed} m/s ({data.wind_direction})
      </div>
      <div className="text-xs">
        <strong>Humidity:</strong> {data.humidity}%
      </div>
    </div>
  );
}
