import { stats } from "@/lib/site";

function TrustBar() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center text-sm md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l}>
            <b className="block text-xl">{n}</b>
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
