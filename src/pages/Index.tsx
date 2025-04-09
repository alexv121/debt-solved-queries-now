
import Navbar from "@/components/Navbar";
import QuestionForm from "@/components/QuestionForm";
import { CreditCard, BarChart4, BadgeDollarSign, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-debt-soft-gray">
      <Navbar />
      
      <main className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-debt-dark-gray mb-4">
            Break Free From <span className="text-debt-purple">Debt</span>
          </h1>
          <p className="text-xl text-debt-neutral-gray max-w-2xl mx-auto">
            Get expert answers to your debt questions and start your journey toward financial freedom.
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-debt-soft-gray hover:border-debt-light-purple transition-colors">
            <div className="bg-debt-soft-blue p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <CreditCard className="text-debt-purple h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-debt-dark-gray">Debt Management</h3>
            <p className="text-debt-neutral-gray">Learn strategies to manage and organize multiple debts effectively.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-debt-soft-gray hover:border-debt-light-purple transition-colors">
            <div className="bg-debt-soft-blue p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart4 className="text-debt-purple h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-debt-dark-gray">Payoff Strategies</h3>
            <p className="text-debt-neutral-gray">Discover the most efficient ways to pay down your debts faster.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-debt-soft-gray hover:border-debt-light-purple transition-colors">
            <div className="bg-debt-soft-blue p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BadgeDollarSign className="text-debt-purple h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-debt-dark-gray">Interest Reduction</h3>
            <p className="text-debt-neutral-gray">Learn how to lower interest rates and reduce the total cost of your debt.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-debt-soft-gray hover:border-debt-light-purple transition-colors">
            <div className="bg-debt-soft-blue p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FileText className="text-debt-purple h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-debt-dark-gray">Credit Improvement</h3>
            <p className="text-debt-neutral-gray">Understand how debt affects your credit score and how to improve it.</p>
          </div>
        </div>
        
        {/* Ask a Question Form */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-debt-dark-gray mb-6">
            Ask Your Question
          </h2>
          <QuestionForm />
        </div>
        
        {/* Testimonials/Success Stories */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-debt-soft-gray">
          <h2 className="text-2xl font-bold text-center text-debt-dark-gray mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-debt-soft-gray rounded-lg">
              <p className="italic text-debt-neutral-gray mb-4">
                "The advice I received helped me consolidate my credit card debt and save thousands in interest. I'm now debt-free after 18 months!"
              </p>
              <div className="font-semibold text-debt-dark-gray">- Michael S.</div>
            </div>
            
            <div className="p-6 bg-debt-soft-gray rounded-lg">
              <p className="italic text-debt-neutral-gray mb-4">
                "I was overwhelmed by student loans until I got personalized guidance here. The step-by-step plan made all the difference."
              </p>
              <div className="font-semibold text-debt-dark-gray">- Jennifer T.</div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-debt-soft-gray py-8">
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

export default Index;
