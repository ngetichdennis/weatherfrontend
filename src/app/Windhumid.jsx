import * as React from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Windhumid() {
  return (
    <div className="flex p-4 ">
      {/* Adjusted card width and height */}
      <Card className="w-full max-w-xs h-[250px] m-4 rounded-2xl shadow-xl">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-2xl">Date</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto">
          <div className="text-center">
            forecast
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-2">
        Humid
        </CardFooter>
      </Card>
    </div>
  )
}
