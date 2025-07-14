import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";

export const App = () => (
  <TooltipProvider>
    <Index />
  </TooltipProvider>
);
