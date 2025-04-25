
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  
  export function Degswitch() {
    return (
      <Tabs defaultValue="celsius" className="w-full max-w-xs mx-auto">
        <TabsList className="grid grid-cols-2 w-full mb-4 gap-1">
          <TabsTrigger
            value="celsius"
            className="text-xs px-1 py-0.5 h-6"
          >
            Celsius
          </TabsTrigger>
          <TabsTrigger
            value="fahrenheit"
            className="text-xs px-1 py-0.5 h-6"
          >
            Fahrenheit
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  }
  