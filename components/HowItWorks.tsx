import { Card, CardContent } from "@/components/ui/card";

const steps = [
  [
    "🔍",
    "1. Browse",
    "See prices, mileage, condition and specs for every car, anytime.",
  ],
  [
    "💬",
    "2. Ask about one car",
    "One tap opens WhatsApp with the car already named. No repeat questions.",
  ],
  [
    "🔑",
    "3. Inspect and drive",
    "Book a test drive, verify the papers and drive home.",
  ],
];

function HowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl text-center">
          Buying made simple
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map(([icon, title, text]) => (
            <Card key={title} className="shadow-none">
              <CardContent className="p-6">
                <div className="text-3xl" aria-hidden>
                  {icon}
                </div>
                <h3 className="mt-3 font-semibold text-base">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
