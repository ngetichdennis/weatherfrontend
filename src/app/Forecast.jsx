
"use client";
import { useEffect, useState } from "react";
import config from "./config";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Forecast({ city, unit }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${config.baseURL}/api/forecast?city=${city}&units=${unit}`
        );
        if (!response.ok) throw new Error("Failed to fetch forecast");
        const data = await response.json();
        setForecastData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city, unit]);

  if (loading) return <div className="p-4">Loading forecast...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {forecastData.map((day, index) => (
        <Card key={index} className="w-full max-w-xs h-[250px] rounded-2xl shadow-xl">
          <CardHeader className="items-center text-center">
            <CardTitle className="text-xl font-semibold">{day.date}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-2">
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
              className="w-16 h-16"
            />
            <div className="text-md capitalize">{day.description}</div>
          </CardContent>
          <CardFooter className="flex justify-between w-full px-6 text-sm">
            <span>Min: {Math.round(day.min_temp)}°</span>
            <span>Max: {Math.round(day.max_temp)}°</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
