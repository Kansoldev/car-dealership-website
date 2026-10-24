import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import VisitCta from "@/components/VisitCta";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: `About us | Kavaro Motors`,
  description: `Learn about Kavaro Motors: inspected cars, verified papers and honest pricing in Lagos.`,
};

const promises = [
  [
    "📄",
    "Verified papers",
    "Customs and ownership documents are checked before we list a car.",
  ],
  [
    "🔧",
    "Inspected cars",
    "Every car passes a 150-point inspection. Bring your own mechanic if you like.",
  ],
  [
    "🏷️",
    "Honest pricing",
    "The price on the website is the price we discuss. No surprise fees.",
  ],
  [
    "💬",
    "Fast answers",
    "Message us on WhatsApp and a real person replies, during opening hours.",
  ],
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative bg-[url('/about-bg.webp')] bg-cover bg-position-[50%_60%] text-white">
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h1 className="max-w-2xl text-4xl md:text-5xl font-extrabold leading-tight">
            Cars you can trust, from people you can reach.
          </h1>

          <p className="mt-4 text-white/80">
            We are a dealership built on one idea: buying a car should not feel
            like a gamble.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Our story</h2>
          <p className="mt-4 max-w-prose text-muted-foreground">
            {site.name} started in 2016 with three cars and a simple rule: only
            sell a car we would put our own family in. Today, we help hundreds
            of drivers find a car they can afford and rely on.
          </p>

          <p className="mt-4 max-w-prose text-muted-foreground">
            Every car goes through a 150-point inspection and has its customs
            and ownership papers checked before it reaches our showroom. We show
            you the real price and the real mileage, and we answer your
            questions plainly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map(([n, l]) => (
            <Card key={l}>
              <CardContent className="p-6">
                <h3 className="text-3xl font-semibold mb-1">{n}</h3>
                <span className="text-sm text-muted-foreground capitalize">
                  {l}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl text-center font-bold md:text-3xl">
            What we promise you
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(([icon, title, text]) => (
              <Card key={title} className="ring-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl" aria-hidden>
                    {icon}
                  </div>
                  <h3 className="mt-4 mb-2 font-semibold text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <VisitCta />
    </main>
  );
}
