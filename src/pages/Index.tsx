
import Navbar from "@/components/Navbar";
import QuestionForm from "@/components/QuestionForm";

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
          <p className="text-xl text-debt-neutral-gray max-w-2xl mx-auto mb-8">
            Get expert answers to your debt questions and start your journey toward financial freedom.
          </p>
          
          {/* Question Form */}
          <QuestionForm />
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
