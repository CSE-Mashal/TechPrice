import Image from "next/image";

"use client";

import { FormEvent, useState } from "react";

const offers = [
  {
    store: "Best Buy",
    price: 349.99,
    shipping: 0,
    condition: "New",
    color: "bg-blue-500",
  },
  {
    store: "eBay",
    price: 329.99,
    shipping: 12.99,
    condition: "New · Fixed price",
    color: "bg-yellow-500",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (query.trim()) {
      setHasSearched(true);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Tech price comparison
          </p>
          <h1 className="text-5xl font-bold tracking-tight">TechPrice</h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Compare tech-product prices across Best Buy and eBay.
          </p>
        </header>

        <form onSubmit={handleSearch} className="flex gap-3">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a product, such as Sony WH-1000XM5"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-400"
          >
            Search
          </button>
        </form>

        {hasSearched && (
          <section className="mt-12">
            <div className="mb-6">
              <p className="text-sm text-slate-400">Comparison results</p>
              <h2 className="text-2xl font-bold">
                Sony WH-1000XM5 Wireless Headphones
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Prices checked just now · Demo data
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {offers.map((offer) => {
                const total = offer.price + offer.shipping;
                const isLowest = total === 342.98;

                return (
                  <article
                    key={offer.store}
                    className={`rounded-xl border p-6 ${
                      isLowest
                        ? "border-green-400 bg-green-400/10"
                        : "border-slate-800 bg-slate-900"
                    }`}
                  >
                    {isLowest && (
                      <p className="mb-4 text-sm font-semibold text-green-300">
                        Lowest total cost
                      </p>
                    )}

                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full ${offer.color}`} />
                      <div>
                        <h3 className="font-semibold">{offer.store}</h3>
                        <p className="text-sm text-slate-400">
                          {offer.condition}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2 text-sm text-slate-300">
                      <p>Item price: ${offer.price.toFixed(2)}</p>
                      <p>Shipping: ${offer.shipping.toFixed(2)}</p>
                      <p className="pt-2 text-xl font-bold text-white">
                        Total: ${total.toFixed(2)}
                      </p>
                    </div>

                    <button className="mt-6 w-full rounded-lg border border-slate-600 px-4 py-2 font-semibold hover:bg-slate-800">
                      View offer
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}