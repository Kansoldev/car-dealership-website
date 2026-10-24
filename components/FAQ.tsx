import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are the prices negotiable?",
    a: "Listed prices are fair market prices. Serious buyers can discuss final terms with our team.",
  },
  {
    q: "Are the cars Nigerian used or foreign used?",
    a: "Every listing is clearly labelled Foreign Used (Tokunbo) or Nigerian Used.",
  },
  {
    q: "Can I pay in installments or trade in my car?",
    a: "Yes. We accept trade-ins and work with financing partners. Ask us on WhatsApp.",
  },
  {
    q: "Do you handle documents and registration?",
    a: "All cars come with verified customs and ownership papers, and we can help with registration.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="w-200 max-w-full mx-auto px-4 py-14">
      <h2 className="text-2xl text-center font-bold md:text-3xl">
        Frequently Asked Questions
      </h2>

      <Accordion className="mt-6">
        {faqs.map((f) => (
          <AccordionItem
            key={f.q}
            value={f.q}
            className="border-b px-4 last:border-b-0"
          >
            <AccordionTrigger className="text-lg hover:no-underline cursor-pointer">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-500">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;
