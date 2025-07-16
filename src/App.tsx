// App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FullPageLoader from "@/components/FullPageLoader";  // ⬅️  NEW

const queryClient = new QueryClient();

const App = () => {
  /* ---------- FULL‑PAGE LOADER CONTROL ---------- */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ❗Replace this timeout with real init logic if needed
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  /* ---------------------------------------------- */

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast / Notification Systems */}
        <Toaster />
        <Sonner />
        <ToastContainer position="top-center" autoClose={3000} />

        {/* App Content vs. Loader */}
        {loading ? (
          <FullPageLoader />                 // ⬅️  Shows the purple spinner
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH‑ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
