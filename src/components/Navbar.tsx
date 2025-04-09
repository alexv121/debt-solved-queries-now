
import { Link } from "react-router-dom";
import { CreditCard, HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-debt-soft-gray shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-debt-purple" />
          <span className="font-bold text-xl text-debt-dark-gray">No More Debt</span>
        </Link>
        
        <Link to="/faq" className="flex items-center gap-1 text-debt-neutral-gray hover:text-debt-purple transition-colors">
          <HelpCircle className="h-4 w-4" />
          <span>FAQ</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
