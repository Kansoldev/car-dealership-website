const raw = [
  {
    id: "camry-2019",
    make: "Toyota",
    model: "Camry SE",
    year: 2019,
    bodyType: "Sedan",
    priceMillions: 24.5,
    location: "Lagos, Nigeria",
    mileageKm: 38000,
    condition: "Foreign Used",
    engine: "2.5L 4-cylinder",
    color: "Silver",
    drivetrain: "FWD",
    imgUrl: "/cars/camry.webp",
    features: [
      "Reverse camera",
      "Apple CarPlay",
      "Lane assist",
      "Push-button start",
      "Leather seats",
    ],
  },
  {
    id: "rx350-2018",
    make: "Lexus",
    model: "RX 350",
    year: 2018,
    bodyType: "SUV",
    priceMillions: 38,
    location: "Abuja, Nigeria",
    mileageKm: 52000,
    condition: "Foreign Used",
    engine: "3.5L V6",
    color: "Black",
    drivetrain: "AWD",
    imgUrl: "/cars/lexus.webp",
    features: [
      "Panoramic roof",
      "Heated seats",
      "360 camera",
      "Navigation",
      "Mark Levinson audio",
    ],
  },
  {
    id: "c300-2017",
    make: "Mercedes-Benz",
    model: "C300",
    year: 2017,
    bodyType: "Sedan",
    priceMillions: 32,
    location: "Delta, Nigeria",
    mileageKm: 61000,
    condition: "Foreign Used",
    engine: "2.0L Turbo",
    color: "White",
    drivetrain: "RWD",
    imgUrl: "/cars/mercedes.webp",
    features: [
      "Ambient lighting",
      "Burmester audio",
      "Keyless entry",
      "Leather seats",
    ],
  },
  {
    id: "accord-2016",
    make: "Honda",
    model: "Accord EX",
    year: 2016,
    bodyType: "Sedan",
    priceMillions: 14.8,
    location: "Lagos, Nigeria",
    mileageKm: 74000,
    condition: "Nigerian Used",
    engine: "2.4L 4-cylinder",
    color: "Blue",
    drivetrain: "FWD",
    imgUrl: "/cars/default.png",
    features: ["Sunroof", "Reverse camera", "Bluetooth", "Cruise control"],
  },
  {
    id: "highlander-2017",
    make: "Toyota",
    model: "Highlander",
    year: 2017,
    bodyType: "SUV",
    priceMillions: 29,
    location: "Lagos, Nigeria",
    mileageKm: 58000,
    condition: "Foreign Used",
    engine: "3.5L V6",
    color: "Gold",
    drivetrain: "AWD",
    imgUrl: "/cars/default.png",
    features: ["7 seats", "Third-row AC", "Reverse camera", "Leather seats"],
  },
  {
    id: "es350-2020",
    make: "Lexus",
    model: "ES 350",
    year: 2020,
    bodyType: "Sedan",
    priceMillions: 42,
    location: "Lagos, Nigeria",
    mileageKm: 29000,
    condition: "Foreign Used",
    engine: "3.5L V6",
    color: "Red",
    drivetrain: "FWD",
    imgUrl: "/cars/default.png",
    features: [
      "Blind-spot monitor",
      "Wireless charging",
      "Navigation",
      "Heated seats",
      "Sunroof",
    ],
  },
] as const;

export type Car = {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  bodyType: "Sedan" | "SUV";
  priceMillions: number;
  location: string;
  mileageKm: number;
  condition: "Foreign Used" | "Nigerian Used";
  transmission: string;
  fuel: string;
  engine: string;
  color: string;
  drivetrain: string;
  imgUrl: string;
  features: readonly string[];
};

// Replace with a database or CMS later. Add `images: string[]` when real photos are ready.
export const cars: Car[] = raw.map((c) => ({
  ...c,
  name: `${c.year} ${c.make} ${c.model}`,
  transmission: "Automatic",
  fuel: "Petrol",
}));

export const getCar = (id: string) => cars.find((c) => c.id === id);
export const makes = Array.from(new Set(cars.map((c) => c.make)));
export const carTypes = ["New", "Tokunbo", "Used"] as const;
export const formatKm = (km: number) => `${km.toLocaleString("en-NG")} km`;
