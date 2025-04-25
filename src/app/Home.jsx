
"use client"
import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { Forecast } from "./Forecast";
import { Windhumid } from "./Windhumid";
import { CurrentWeather } from "./CurrentWeather";

export function Homepanel() {
  const [city, setCity] = useState("Nairobi");
  const [unit, setUnit] = useState("metric");

  return (
    <div className="h-screen w-screen flex flex-row bg-gradient-to-br text-black">
      {/* Sidebar Panel (Left) */}
      <div className="w-1/5 min-w-[150px] p-4 bg-gray-100 flex flex-col justify-between">
      <CurrentWeather city={city} unit={unit} />
      </div>

      {/* Main Content Panel (Right) */}
      <div className="w-4/5 flex flex-col p-4 overflow-auto">
        {/* Search Bar Section */}
        <div className="w-full flex justify-center mb-4">
          <Searchbar unit={unit} onUnitChange={setUnit} onSearch={setCity} />
        </div>

        {/* Forecast and Wind/Humidity */}
        <div>
          <Forecast city={city} unit={unit} />
          <Windhumid city={city} unit={unit} />
        </div>
      </div>
    </div>
  );
}
