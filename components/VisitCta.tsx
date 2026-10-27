import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "cn";

const VisitCta = () => {
  return (
    <section className="relative w-full bg-[url('/hero.webp')] bg-cover bg-center text-white py-4">
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Want to check a car in person?
        </h2>

        <p className="mt-5 text-white/80">
          Address: Lekki Phase 1, Lagos, Nigeria <br /> Office hours: Mon – Sat,
          9am – 6pm
        </p>

        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "text-lg p-7 mt-8 rounded-md",
          )}
        >
          Book a Test Drive
        </Link>
      </div>
    </section>
  );
};

export default VisitCta;
