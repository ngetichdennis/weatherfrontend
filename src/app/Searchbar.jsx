
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Degswitch } from "./Degswitch";

export function Searchbar({ unit, onUnitChange, onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <div className="flex w-full items-center justify-between px-4 max-w-4xl mx-auto">
      {/* Input and Button */}
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search by city"
          className="w-[200px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button type="button" onClick={handleSearch}>
          GO
        </Button>
      </div>

      {/* Degree Switch */}
      <Degswitch unit={unit} onUnitChange={onUnitChange} />
    </div>
  );
}
