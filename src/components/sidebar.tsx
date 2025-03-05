import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

export function Sidebar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <Button 
        className="md:hidden fixed top-4 right-4 z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </Button>

      <div className={cn(
        "bg-background fixed inset-0 z-40 md:static",
        "transform transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        className
      )}>
        <ScrollArea className="h-full py-6 pl-4 pr-6">
          {/* ...existing sidebar content... */}
        </ScrollArea>
      </div>
    </>
  );
}
