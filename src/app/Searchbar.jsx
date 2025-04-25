
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Degswitch } from "./Degswitch"

export function Searchbar() {
  return (
    <div className="flex w-full items-center justify-between px-4 max-w-4xl mx-auto">
      {/* Left side: Input and Button */}
      <div className="flex items-center gap-2">
        <Input type="text" placeholder="Search by city" className="w-[200px]" />
        <Button type="submit">GO</Button>
      </div>

      {/* Right side: Degswitch */}
      <Degswitch />
    </div>
  )
}
