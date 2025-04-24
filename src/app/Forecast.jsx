
import * as React from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Forecast() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted">
      <Card className="w-full max-w-sm h-[300px] m-4 rounded-2xl shadow-xl">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-2xl">Date</CardTitle>
          
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto ">
          
          <div className="text-center ">
            forecast
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-2">
         temperatures
        </CardFooter>
      </Card>
    </div>
  )
}
