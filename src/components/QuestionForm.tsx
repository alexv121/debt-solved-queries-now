
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question before submitting",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://alexvaughn415.app.n8n.cloud/webhook-test/b6a355a6-1880-4f20-b34f-9779b2dcab02", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      
      if (response.ok) {
        toast({
          title: "Question Submitted!",
          description: "We've received your question and will respond soon.",
        });
        setQuestion("");
      } else {
        throw new Error("Failed to submit question");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your question. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting question:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-debt-dark-gray">Ask Your Debt Question</CardTitle>
        <CardDescription>
          Get expert advice on managing, reducing, or understanding your debt situation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Your Question</Label>
            <Textarea
              id="question"
              placeholder="Ask anything about your debt situation..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[120px]"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-debt-purple hover:bg-debt-purple/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Submit Question
              </span>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4 text-sm text-debt-cool-gray">
        We respect your privacy. Your information will not be shared.
      </CardFooter>
    </Card>
  );
};

export default QuestionForm;
