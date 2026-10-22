const raw = [
  { id: "camry-2019", make: "Toyota", model: "Camry SE", year: 2019, bodyType: "Sedan", priceMillions: 24.5, mileageKm: 38000, condition: "Foreign Used", engine: "2.5L 4-cylinder", color: "Silver", drivetrain: "FWD", gradient: "from-slate-700 to-slate-900", features: ["Reverse camera", "Apple CarPlay", "Lane assist", "Push-button start", "Leather seats"] },
  { id: "rx350-2018", make: "Lexus", model: "RX 350", year: 2018, bodyType: "SUV", priceMillions: 38, mileageKm: 52000, condition: "Foreign Used", engine: "3.5L V6", color: "Black", drivetrain: "AWD", gradient: "from-emerald-700 to-emerald-900", features: ["Panoramic roof", "Heated seats", "360 camera", "Navigation", "Mark Levinson audio"] },
  { id: "c300-2017", make: "Mercedes-Benz", model: "C300", year: 2017, bodyType: "Sedan", priceMillions: 32, mileageKm: 61000, condition: "Foreign Used", engine: "2.0L Turbo", color: "White", drivetrain: "RWD", gradient: "from-zinc-600 to-zinc-900", features: ["Ambient lighting", "Burmester audio", "Keyless entry", "Leather seats"] },
  { id: "accord-2016", make: "Honda", model: "Accord EX", year: 2016, bodyType: "Sedan", priceMillions: 14.8, mileageKm: 74000, condition: "Nigerian Used", engine: "2.4L 4-cylinder", color: "Blue", drivetrain: "FWD", gradient: "from-blue-700 to-blue-900", features: ["Sunroof", "Reverse camera", "Bluetooth", "Cruise control"] },
  { id: "highlander-2017", make: "Toyota", model: "Highlander", year: 2017, bodyType: "SUV", priceMillions: 29, mileageKm: 58000, condition: "Foreign Used", engine: "3.5L V6", color: "Gold", drivetrain: "AWD", gradient: "from-amber-700 to-amber-900", features: ["7 seats", "Third-row AC", "Reverse camera", "Leather seats"] },
  { id: "es350-2020", make: "Lexus", model: "ES 350", year: 2020, bodyType: "Sedan", priceMillions: 42, mileageKm: 29000, condition: "Foreign Used", engine: "3.5L V6", color: "Red", drivetrain: "FWD", gradient: "from-rose-700 to-rose-900", features: ["Blind-spot monitor", "Wireless charging", "Navigation", "Heated seats", "Sunroof"] },
] as const;

export type Car = {
  id: string; name: string; make: string; model: string; year: number;
  bodyType: "Sedan" | "SUV"; priceMillions: number; mileageKm: number;
  condition: "Foreign Used" | "Nigerian Used"; transmission: string; fuel: string;
  engine: string; color: string; drivetrain: string; gradient: string; features: readonly string[];
};

// Replace with a database or CMS later. Add `images: string[]` when real photos are ready.
export const cars: Car[] = raw.map((c) => ({
  ...c, name: `${c.year} ${c.make} ${c.model}`, transmission: "Automatic", fuel: "Petrol",
}));

export const getCar = (id: string) => cars.find((c) => c.id === id);
export const makes = Array.from(new Set(cars.map((c) => c.make)));
export const bodyTypes = ["Sedan", "SUV"] as const;
export const formatKm = (km: number) => `${km.toLocaleString("en-NG")} km`;
