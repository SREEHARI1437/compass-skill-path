// Common IT skills to extract from resume text
const itSkills = [
  // Programming Languages
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++', 'C', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin',
  'Scala', 'R', 'MATLAB', 'Perl', 'Shell', 'Bash', 'PowerShell',
  
  // Frontend Technologies
  'React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte', 'jQuery', 'HTML', 'CSS', 'SASS', 'SCSS', 'Less',
  'Bootstrap', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Chakra UI',
  
  // Backend Technologies
  'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'ASP.NET', 'Laravel', 'Ruby on Rails',
  'Gin', 'Fiber', 'Actix',
  
  // Databases
  'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Oracle', 'SQL Server', 'DynamoDB', 'Cassandra',
  'ElasticSearch', 'Neo4j', 'Firebase', 'Supabase',
  
  // Cloud & DevOps
  'AWS', 'Azure', 'Google Cloud', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'GitHub Actions',
  'Terraform', 'Ansible', 'Chef', 'Puppet', 'Nginx', 'Apache',
  
  // Tools & Platforms
  'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'Slack', 'Teams', 'Figma', 'Adobe XD',
  'Sketch', 'Postman', 'Insomnia', 'VS Code', 'IntelliJ', 'Eclipse',
  
  // Data & Analytics
  'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV',
  'Tableau', 'Power BI', 'Excel', 'Google Analytics', 'Apache Spark', 'Hadoop',
  
  // Testing
  'Jest', 'Cypress', 'Selenium', 'Playwright', 'JUnit', 'PyTest', 'Mocha', 'Chai', 'Enzyme',
  
  // Mobile Development
  'React Native', 'Flutter', 'Xamarin', 'Ionic', 'Android Studio', 'Xcode',
  
  // Other Technologies
  'GraphQL', 'REST API', 'SOAP', 'Microservices', 'Serverless', 'OAuth', 'JWT', 'SSL/TLS', 'JSON', 'XML',
  'YAML', 'Markdown', 'Agile', 'Scrum', 'Kanban', 'Machine Learning', 'AI', 'Deep Learning', 'Data Science',
  'Blockchain', 'Web3', 'Solidity', 'IoT', 'AR/VR', 'Unity', 'Unreal Engine'
];

export const extractSkillsFromText = (text: string): string[] => {
  if (!text) return [];
  
  const textLower = text.toLowerCase();
  const foundSkills: string[] = [];
  
  // Extract skills by matching against our predefined list
  itSkills.forEach(skill => {
    const skillLower = skill.toLowerCase();
    const skillPattern = new RegExp(`\\b${skillLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    
    if (skillPattern.test(textLower)) {
      foundSkills.push(skill);
    }
  });
  
  // Remove duplicates and return
  return [...new Set(foundSkills)];
};

export const formatSkillsForDisplay = (skills: string[]): string => {
  return skills.join(', ');
};

// Extract text from different file types
export const extractTextFromFile = async (file: File): Promise<string> => {
  const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
  
  if (fileExtension === '.txt') {
    return await file.text();
  }
  
  // For now, we'll provide a placeholder for PDF/DOC parsing
  // In a production app, you'd use libraries like pdf-parse, mammoth, etc.
  if (fileExtension === '.pdf') {
    // Placeholder for PDF text extraction
    // You would typically use a library like pdf-parse here
    return "Please paste your resume text manually for now. PDF parsing will be implemented soon.";
  }
  
  if (fileExtension === '.doc' || fileExtension === '.docx') {
    // Placeholder for Word document extraction
    // You would typically use a library like mammoth here
    return "Please paste your resume text manually for now. Word document parsing will be implemented soon.";
  }
  
  throw new Error('Unsupported file format');
};
