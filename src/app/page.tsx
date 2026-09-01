import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Tech price comparison
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          TechPrice
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-300">
          Compare tech-product prices across Best Buy and eBay to find the
          lowest total cost.
        </p>

        <button className="mt-8 rounded-lg bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-400">
          Search products
        </button>
      </div>
    </main>
  );
}