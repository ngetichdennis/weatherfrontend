
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
  export function Homepanel() {
    return (
      <div className="m-4 h-[calc(100vh-2rem)] rounded-xl shadow-lg overflow-hidden">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full w-full"
        >
          <ResizablePanel defaultSize={20}>
            <div className="flex h-full items-center justify-center p-6 bg-gray-100">
              <span className="font-semibold text-lg">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <div className="flex h-full items-center justify-center p-6 bg-white">
              <span className="font-semibold text-lg">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    )
  }
  