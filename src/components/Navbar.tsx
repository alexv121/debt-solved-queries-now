
import { Link } from "react-router-dom";
import { CreditCard, HelpCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-debt-soft-gray shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-debt-purple" />
          <span className="font-bold text-xl text-debt-dark-gray">No More Debt</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center gap-1 text-debt-neutral-gray hover:text-debt-purple transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/faq" className="flex items-center gap-1 text-debt-neutral-gray hover:text-debt-purple transition-colors">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </Link>
        </div>
        
        <Button className="bg-debt-purple hover:bg-debt-purple/90 text-white">
          Ask a Question
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
