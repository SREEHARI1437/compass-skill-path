import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, Star, AlertCircle, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoadmapResultsProps {
  formData: {
    currentSkills: string;
    targetRole: string;
    resumeText: string;
  };
}

const RoadmapResults = ({ formData }: RoadmapResultsProps) => {
  // Mock roadmap data - in a real app, this would come from AI analysis
  const roadmapData = {
    resumeAnalysis: {
      keywordMatch: "Your resume effectively includes core skills like JavaScript and React, but could be strengthened by adding cloud technologies and modern DevOps practices.",
      formatting: "Your resume uses standard headings which is great for ATS. Avoid using images or multi-column layouts.",
      actionVerbs: "Use stronger action verbs to start your bullet points. Instead of 'Responsible for...', use 'Developed...', 'Implemented...', or 'Led...'."
    },
    phases: [
      {
        title: "Foundational Skills",
        icon: Target,
        skills: [
          {
            name: "Advanced JavaScript ES6+",
            resource: "JavaScript.info Complete Course",
            link: "https://javascript.info/",
            certificate: "Free completion certificate available"
          },
          {
            name: "Git & GitHub Mastery",
            resource: "GitHub Skills Interactive Course",
            link: "https://skills.github.com/",
            certificate: "GitHub badges and certificates"
          },
          {
            name: "Responsive Web Design",
            resource: "freeCodeCamp Responsive Web Design",
            link: "https://www.freecodecamp.org/learn/responsive-web-design/",
            certificate: "Free certificate upon completion"
          }
        ]
      },
      {
        title: "Core Competencies",
        icon: TrendingUp,
        skills: [
          {
            name: "Modern React Development",
            resource: "React Official Tutorial + Hooks",
            link: "https://react.dev/learn",
            certificate: "Complete the tutorial for portfolio projects"
          },
          {
            name: "Node.js & Express",
            resource: "freeCodeCamp Backend Development",
            link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
            certificate: "Free certificate available"
          },
          {
            name: "Database Design & SQL",
            resource: "SQLBolt Interactive Lessons",
            link: "https://sqlbolt.com/",
            certificate: "Portfolio projects with database integration"
          }
        ]
      },
      {
        title: "Advanced & High-Scope Skills",
        icon: Zap,
        skills: [
          {
            name: "AWS Cloud Fundamentals",
            resource: "AWS Cloud Practitioner Essentials",
            link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
            certificate: "Free AWS Cloud Practitioner certification prep"
          },
          {
            name: "TypeScript Mastery",
            resource: "TypeScript Official Handbook",
            link: "https://www.typescriptlang.org/docs/",
            certificate: "Build TypeScript projects for portfolio"
          },
          {
            name: "Docker & Containerization",
            resource: "Docker Official Getting Started",
            link: "https://docs.docker.com/get-started/",
            certificate: "Docker certificates and hands-on labs"
          }
        ]
      }
    ]
  };

  return (
    <div className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Your Personalized Roadmap to Becoming a {formData.targetRole}
            </h2>
            <p className="text-xl text-muted-foreground">
              This roadmap is designed to guide you from your current skills to a high-demand IT role
            </p>
          </div>

          {/* Resume Analysis */}
          <Card className="mb-12 shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <AlertCircle className="w-6 h-6 mr-3 text-primary" />
                Resume Analysis: Your Resume and ATS Readiness
              </CardTitle>
              <CardDescription>
                Actionable insights to make your resume more recruiter-friendly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Star className="w-4 h-4 mr-2 text-primary" />
                    Keywords
                  </h4>
                  <p className="text-sm text-muted-foreground">{roadmapData.resumeAnalysis.keywordMatch}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Formatting
                  </h4>
                  <p className="text-sm text-muted-foreground">{roadmapData.resumeAnalysis.formatting}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                    Action Verbs
                  </h4>
                  <p className="text-sm text-muted-foreground">{roadmapData.resumeAnalysis.actionVerbs}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap Phases */}
          <div className="space-y-12">
            {roadmapData.phases.map((phase, phaseIndex) => (
              <Card key={phaseIndex} className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <phase.icon className="w-6 w-6 mr-3 text-primary" />
                    Phase {phaseIndex + 1}: {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {phase.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start justify-between p-4 rounded-lg bg-muted/50 border border-border/30">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm text-muted-foreground">Resource:</span>
                            <a 
                              href={skill.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-glow transition-colors inline-flex items-center"
                            >
                              {skill.resource}
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {skill.certificate}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Future Features */}
          <Card className="mt-12 shadow-card border-border/50 bg-gradient-to-r from-primary/5 to-primary-glow/5">
            <CardHeader>
              <CardTitle className="text-2xl">Coming Soon: Enhanced Features</CardTitle>
              <CardDescription>
                We're building powerful features to make Compass your complete career ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">🤝 The Compass Community Hub</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with fellow learners, share milestones, and access job referrals. 
                    A "Referral Board" will help you find opportunities through community connections.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">🔍 Job Search & Industry Connections</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time job matching based on your skills, plus AI-generated networking messages 
                    to connect with industry professionals on LinkedIn.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Create Another Roadmap
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapResults;