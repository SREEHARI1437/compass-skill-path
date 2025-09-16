import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Upload, Target, FileText, Brain, Sparkles } from "lucide-react";
import DocumentUpload from "./DocumentUpload";
import { extractSkillsFromText, formatSkillsForDisplay } from "@/lib/skillsExtractor";

const CareerForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    currentSkills: "",
    targetRole: "",
    resumeText: "",
  });

  const itRoles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "DevOps Engineer",
    "Cloud Architect",
    "Cybersecurity Analyst",
    "Product Manager",
    "UI/UX Designer",
    "Mobile Developer",
    "Machine Learning Engineer",
    "Database Administrator"
  ];

  const handleFileUpload = (text: string) => {
    setFormData({ ...formData, resumeText: text });
    
    // Extract skills from the uploaded text
    if (text && !text.includes("Please paste your resume text manually")) {
      const extractedSkills = extractSkillsFromText(text);
      if (extractedSkills.length > 0) {
        const skillsText = formatSkillsForDisplay(extractedSkills);
        setFormData(prev => ({ ...prev, currentSkills: skillsText }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section id="form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get Your Personalized Roadmap
            </h2>
            <p className="text-xl text-muted-foreground">
              Share your details and we'll create a comprehensive career plan just for you
            </p>
          </div>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Brain className="w-6 h-6 mr-3 text-primary" />
                Career Analysis Form
              </CardTitle>
              <CardDescription>
                Fill out the form below to receive your customized IT career roadmap with ATS resume analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentSkills" className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-primary" />
                      Current Skills
                      <Sparkles className="w-3 h-3 ml-1 text-primary opacity-60" />
                    </Label>
                    <Textarea
                      id="currentSkills"
                      placeholder="e.g., JavaScript, Python, SQL, React, AWS... (Auto-populated from resume)"
                      value={formData.currentSkills}
                      onChange={(e) => setFormData({ ...formData, currentSkills: e.target.value })}
                      className="min-h-[100px]"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      💡 Upload your resume to auto-extract your skills
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetRole" className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-primary" />
                      Target IT Role
                    </Label>
                    <Select 
                      value={formData.targetRole} 
                      onValueChange={(value) => setFormData({ ...formData, targetRole: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your target role" />
                      </SelectTrigger>
                      <SelectContent>
                        {itRoles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="flex items-center">
                    <Upload className="w-4 h-4 mr-2 text-primary" />
                    Resume Upload
                  </Label>
                  
                  <DocumentUpload 
                    onFileUpload={handleFileUpload}
                    uploadedFileName={formData.resumeText && !formData.resumeText.includes("Please paste") ? "Resume Uploaded" : undefined}
                  />
                  
                  <div className="space-y-2">
                    <Label htmlFor="resumeText">Or paste resume content manually</Label>
                    <Textarea
                      id="resumeText"
                      placeholder="Paste your complete resume text here for ATS analysis..."
                      value={formData.resumeText}
                      onChange={(e) => setFormData({ ...formData, resumeText: e.target.value })}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  variant="hero" 
                  className="w-full group"
                  disabled={!formData.currentSkills || !formData.targetRole || !formData.resumeText}
                >
                  Generate My Career Roadmap
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;