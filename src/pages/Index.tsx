import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CareerForm from "@/components/CareerForm";
import RoadmapResults from "@/components/RoadmapResults";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setShowResults(true);
    // Smooth scroll to results
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {!showResults ? (
        <>
          <HeroSection />
          <CareerForm onSubmit={handleFormSubmit} />
        </>
      ) : (
        <div className="pt-20">
          <RoadmapResults formData={formData} />
        </div>
      )}
    </div>
  );
};

export default Index;
