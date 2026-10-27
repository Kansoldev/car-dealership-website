import Image from "next/image";
import Link from "next/link";

const BrowseByBrands = () => {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl text-center">
          Browse cars by brands
        </h2>
      </div>

      <div className="px-5 md:px-0 cursor-pointer">
        <Link href="/inventory">
          <Image
            src="/car-brands.webp"
            className="object-cover mx-auto"
            width={700}
            height={200}
            alt=""
          />
        </Link>
      </div>
    </section>
  );
};

export default BrowseByBrands;
