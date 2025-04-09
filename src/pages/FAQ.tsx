
import Navbar from "@/components/Navbar";
import FaqSection from "@/components/FaqSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-debt-soft-gray">
      <Navbar />
      
      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-debt-dark-gray mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-debt-neutral-gray max-w-2xl mx-auto">
            Browse our most common debt-related questions and answers
          </p>
        </div>
        
        <FaqSection />
        
        <div className="text-center mt-12">
          <p className="text-debt-neutral-gray mb-4">Don't see your question here?</p>
          <Link to="/">
            <Button className="bg-debt-purple hover:bg-debt-purple/90 text-white">
              <span className="mr-2">Ask Your Question</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
      
      <footer className="bg-white border-t border-debt-soft-gray py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-debt-cool-gray">
          <p>&copy; {new Date().getFullYear()} No More Debt. All rights reserved.</p>
          <p className="text-sm mt-2">
            Disclaimer: We provide information and education but not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
