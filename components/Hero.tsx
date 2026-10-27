import { carTypes, makes } from "@/lib/cars";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const selectClass =
  "h-12 rounded-lg border bg-white px-3 text-sm text-slate-900";

function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center bg-[url('/hero.webp')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative text-center px-4">
        <h1 className="max-w-2xl mx-auto text-4xl font-extrabold leading-tight md:text-6xl">
          Find your next car in minutes, not DMs.
        </h1>

        <p className="mt-4 max-w-xl mx-auto text-white/90">
          Find quality cars with competitive prices, full specs and clear
          photos. We ensure you find your dream car with ease.
        </p>

        <form
          action="/inventory"
          className="grid sm:grid-cols-4 gap-3 max-w-5xl mx-auto rounded-2xl bg-white p-3 shadow-xl mt-8"
        >
          <select name="make" className={selectClass} aria-label="Make">
            <option value="">Any make</option>
            {makes.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          <select name="type" className={selectClass} aria-label="Body type">
            <option value="">Any type</option>
            {carTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <select name="budget" className={selectClass} aria-label="Budget">
            <option value="">Any budget</option>
            <option value="20">Under ₦30M</option>
            <option value="60">Under ₦60M</option>
            <option value="90">Under ₦90M</option>
          </select>

          <button
            type="submit"
            className={cn(buttonVariants(), "rounded-lg h-12 text-base py-6")}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
