import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatKm, type Car } from "@/lib/cars";
import { cn } from "@/lib/utils";

function CarCard({ car }: { car: Car }) {
  return (
    <Card className="pt-0">
      <Link
        href={`/inventory/${car.id}`}
        className={cn("relative flex h-44 items-end bg-linear-to-br")}
        aria-label={`View ${car.name}`}
      >
        <div className="relative w-150 h-full">
          <Image
            src={car.imgUrl}
            className="w-full object-cover object-center"
            alt=""
            fill
          />
        </div>

        <Badge className="absolute left-3 top-3">{car.condition}</Badge>
      </Link>

      <CardContent>
        <Link
          href={`/inventory/${car.id}`}
          className="font-semibold hover:underline text-base"
        >
          {car.name}
        </Link>

        <p className="my-2 text-sm">{car.location}</p>

        <p className="mt-1 text-sm text-muted-foreground">
          {formatKm(car.mileageKm)}, {car.transmission}, {car.fuel}
        </p>

        <p className="mt-3 text-xl font-extrabold text-brand">
          ₦{car.priceMillions}M
        </p>
      </CardContent>
    </Card>
  );
}

export default CarCard;
