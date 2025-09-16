import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CareerForm from "@/components/CareerForm";
import RoadmapResults from "@/components/RoadmapResults";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [roadmapData, setRoadmapData] = useState(null);

  const handleFormSubmit = (data: any) => {
    setRoadmapData(data);
    // Smooth scroll to results
    setTimeout(() => {
      const element = document.getElementById('roadmaps');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
            <div className="flex h-14 items-center px-4">
              <SidebarTrigger className="mr-4" />
              <h1 className="font-semibold text-foreground">Compass AI - Navigating you into IT career</h1>
            </div>
          </div>
          <main className="flex-1">
            <div id="home">
              <HeroSection />
            </div>
            <div id="form">
              <CareerForm onSubmit={handleFormSubmit} />
            </div>
            {roadmapData && (
              <div id="roadmaps">
                <RoadmapResults formData={roadmapData} />
              </div>
            )}
          </main>
        </SidebarInset>
      </div>
      <Toaster />
    </SidebarProvider>
  );
};

export default Index;
