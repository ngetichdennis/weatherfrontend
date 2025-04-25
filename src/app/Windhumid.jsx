
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

export function Windhumid({ city, unit }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${config.baseURL}/api/weather?city=${city}&units=${unit}`
        );
        if (!response.ok) throw new Error("Failed to fetch weather");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [city, unit]);

  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!data) return <div className="p-4">Loading weather...</div>;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Wind Status Card */}
      <Card className="w-full max-w-xs h-[250px] m-4 rounded-2xl shadow-xl">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-xl font-semibold">Wind Status</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-2xl font-bold">
          {data.wind_speed} {unit === "metric" ? "m/s" : "mph"}
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-600">
          Direction: {data.wind_direction}
        </CardFooter>
      </Card>

      {/* Humidity Card */}
      <Card className="w-full max-w-xs h-[250px] m-4 rounded-2xl shadow-xl">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-xl font-semibold">Humidity</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold mb-2">{data.humidity}%</div>
          <div className="relative w-full h-4 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
              style={{ width: `${data.humidity}%` }}
            />
          </div>
          <div className="flex justify-between w-full text-xs pt-1 px-1 text-gray-500">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
