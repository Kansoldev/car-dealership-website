import Link from "next/link";
import CarCard from "@/components/car-card";
import { cars } from "@/lib/cars";

function FeaturedCars() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">
            Discover Featured Cars
          </h2>

          <Link
            href="/inventory"
            className="text-sm font-medium text-blue-700 mt-2 md:mt-0"
          >
            View all cars &raquo;
          </Link>
        </div>

        <div className="grid gap-10 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cars.slice(0, 3).map((c) => (
            <CarCard key={c.id} car={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCars;
