import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/compass-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-subtle-gradient">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional IT career guidance" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            AI-Powered Career Guidance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Navigate Your Path to
            <span className="bg-hero-gradient bg-clip-text text-transparent"> IT Success</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personalized career roadmaps, ATS-optimized resume analysis, and curated free resources 
            to land your dream IT role faster than ever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="hero" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Sample Roadmap
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-card">
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Personalized Roadmaps</h3>
              <p className="text-sm text-muted-foreground">Tailored learning paths based on your current skills and target role</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-card">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">ATS Resume Analysis</h3>
              <p className="text-sm text-muted-foreground">Expert analysis to make your resume recruiter-ready</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-card">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Industry Insights</h3>
              <p className="text-sm text-muted-foreground">Latest trends and in-demand skills from top tech companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;