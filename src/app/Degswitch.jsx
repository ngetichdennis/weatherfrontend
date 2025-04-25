
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function Degswitch({ unit, onUnitChange }) {
  return (
    <Tabs value={unit} className="w-full max-w-xs mx-auto">
      <TabsList className="grid grid-cols-2 w-full mb-4 gap-1">
        <TabsTrigger
          value="metric"
          className="text-xs px-1 py-0.5 h-6"
          onClick={() => onUnitChange("metric")}
        >
          Celsius
        </TabsTrigger>
        <TabsTrigger
          value="imperial"
          className="text-xs px-1 py-0.5 h-6"
          onClick={() => onUnitChange("imperial")}
        >
          Fahrenheit
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
