
import { Searchbar } from "./Searchbar";
import { Forecast } from "./Forecast";
import { Windhumid } from "./Windhumid";

export function Homepanel() {
  return (
    <div className="h-screen w-screen flex flex-row bg-gradient-to-br text-black">
      {/* Sidebar Panel (Left) */}
      <div className="w-1/5 min-w-[150px] flex items-center justify-center p-4 bg-gray-100">
        <span className="font-semibold text-lg">Menu</span>
      </div>

      {/* Main Content Panel (Right) */}
      <div className="w-4/5 flex flex-col p-4 overflow-auto">
        {/* Search Bar Section */}
        <div className="w-full flex justify-center mb-4">
          <Searchbar />
        </div>

        {/* Forecast and Wind/Humidity vertically stacked with tighter spacing */}
        <div >
          <div >
            <Forecast />
          </div>
          <div>
            <Windhumid />
          </div>
        </div>
      </div>
    </div>
  );
}
