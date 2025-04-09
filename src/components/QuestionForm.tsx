
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [solution, setSolution] = useState("");
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
    setSolution("");
    
    try {
      const response = await fetch("https://alexvaughn415.app.n8n.cloud/webhook/b6a355a6-1880-4f20-b34f-9779b2dcab02", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("Webhook response:", data);
        
        // Check if the response contains an output field
        if (data.output) {
          setSolution(data.output);
        } else if (data.message) {
          toast({
            title: "Question Submitted!",
            description: "Your question is being processed. The solution will appear shortly.",
          });
        }
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
                <Loader2 className="h-4 w-4 animate-spin" />
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

        {solution && (
          <div className="mt-8">
            <Alert className="bg-debt-soft-gray border-debt-purple">
              <AlertTitle className="text-debt-purple text-lg font-semibold">Here's your solution</AlertTitle>
              <AlertDescription className="mt-2 whitespace-pre-line text-debt-dark-gray">
                {solution}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4 text-sm text-debt-cool-gray">
        We respect your privacy. Your information will not be shared.
      </CardFooter>
    </Card>
  );
};

export default QuestionForm;
