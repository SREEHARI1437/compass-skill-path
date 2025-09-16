import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, X, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DocumentUploadProps {
  onFileUpload: (text: string) => void;
  uploadedFileName?: string;
}

const DocumentUpload = ({ onFileUpload, uploadedFileName }: DocumentUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState(uploadedFileName || "");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const supportedFormats = ['.pdf', '.doc', '.docx', '.txt'];

  const handleFileSelect = async (file: File) => {
    if (!file) return;

    const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    if (!supportedFormats.includes(fileExtension)) {
      toast({
        title: "Unsupported file format",
        description: `Please upload a file in one of these formats: ${supportedFormats.join(', ')}`,
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setFileName(file.name);

    try {
      let text = "";
      
      if (fileExtension === '.txt') {
        text = await file.text();
      } else if (fileExtension === '.pdf') {
        // For PDF files, we'll use a simple text extraction
        // In a real app, you'd use a proper PDF parser
        const formData = new FormData();
        formData.append('file', file);
        
        // Simulate PDF text extraction
        text = "PDF content would be extracted here. For now, please copy and paste your resume text manually.";
        
        toast({
          title: "PDF Upload",
          description: "PDF parsing is not yet implemented. Please copy and paste your resume text manually.",
          variant: "default",
        });
      } else {
        // For DOC/DOCX files
        text = "Document content would be extracted here. For now, please copy and paste your resume text manually.";
        
        toast({
          title: "Document Upload",
          description: "Document parsing is not yet implemented. Please copy and paste your resume text manually.",
          variant: "default",
        });
      }

      onFileUpload(text);
      
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been processed`,
      });
    } catch (error) {
      console.error('Error processing file:', error);
      toast({
        title: "Error processing file",
        description: "Please try again or paste your resume text manually",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    setFileName("");
    onFileUpload("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (fileName && !isProcessing) {
    return (
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">{fileName}</p>
                <p className="text-sm text-muted-foreground">File uploaded successfully</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className={`border-2 border-dashed transition-colors ${
        isDragging 
          ? 'border-primary bg-primary/10' 
          : 'border-border hover:border-primary/50'
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <CardContent className="p-8">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            {isProcessing ? (
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            ) : (
              <Upload className="w-8 h-8 text-primary" />
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              {isProcessing ? "Processing your resume..." : "Upload your resume"}
            </h3>
            <p className="text-sm text-muted-foreground">
              Drag and drop your resume here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Supports: {supportedFormats.join(', ')} (max 10MB)
            </p>
          </div>

          <Button 
            variant="outline" 
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="mt-4"
          >
            <FileText className="w-4 h-4 mr-2" />
            Choose File
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept={supportedFormats.join(',')}
            onChange={handleFileInputChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentUpload;