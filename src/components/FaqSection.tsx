
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    question: "What is debt consolidation?",
    answer: "Debt consolidation is the process of combining multiple debts into a single loan or payment plan, often at a lower interest rate. This can make your debt more manageable by reducing the number of payments you need to make each month and potentially lowering your overall interest costs."
  },
  {
    question: "How does debt affect my credit score?",
    answer: "Your debt affects your credit score primarily through your payment history and credit utilization ratio. Late or missed payments can significantly lower your score, while keeping your credit card balances below 30% of your credit limits can help maintain a good score. The types of debt you have and your overall debt level also play a role."
  },
  {
    question: "What's the difference between good debt and bad debt?",
    answer: "Good debt is typically used to purchase assets that appreciate in value or increase your earning potential, such as a mortgage for a home or student loans for education. Bad debt is usually used for consumables or assets that depreciate in value, like credit card debt from everyday expenses or auto loans for new vehicles."
  },
  {
    question: "What are the most effective strategies for paying off debt?",
    answer: "Two popular strategies are the avalanche method (paying off debts with the highest interest rates first) and the snowball method (paying off the smallest debts first for psychological wins). Other strategies include debt consolidation, negotiating with creditors, and seeking credit counseling. The best approach depends on your specific financial situation and personal motivation factors."
  },
  {
    question: "Can debt be forgiven or canceled?",
    answer: "In certain circumstances, yes. Some options include bankruptcy (which can discharge certain debts but has serious long-term consequences), loan forgiveness programs (particularly for student loans), debt settlement (negotiating to pay less than you owe), and debt management plans through credit counseling agencies. Each option has different requirements and impacts on your financial future."
  }
];

const FaqSection = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-debt-dark-gray">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-debt-dark-gray hover:text-debt-purple">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-debt-neutral-gray">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FaqSection;
