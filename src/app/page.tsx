'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Star, ShieldCheck, Truck, Plus, Check, ArrowRight, Zap, ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  description: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Ultra-Low Latency Audio Streamer', price: 189, category: 'Hardware', rating: 4.9, stock: 8, badge: 'Popular', description: 'Real-time WebSocket audio streaming board with hardware FIFO buffer and sub-20ms packet dispatch.' },
  { id: '2', name: 'Edge Gateway VPS Node Controller', price: 299, category: 'DevOps', rating: 4.8, stock: 15, badge: 'Enterprise', description: 'Hardened Linux appliance preconfigured with Docker Compose, Nginx SSL reverse proxy, and UFW firewall.' },
  { id: '3', name: 'PostgreSQL Vector Accelerator', price: 149, category: 'Database', rating: 5.0, stock: 32, badge: 'Best Seller', description: 'In-memory inverted indexer and similarity search plugin cutting relational query times by 3.8x.' },
  { id: '4', name: 'Enterprise SaaS Starter License', price: 99, category: 'Software', rating: 4.9, stock: 100, description: 'Production-ready Next.js 15 template featuring Supabase SSR Auth cookies and PostgreSQL RLS tenant isolation.' },
];

export default function StorefrontHomePage() {
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const match = prev.find((item) => item.product.id === product.id);
      if (match) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setJustAdded(product.id);
    setTimeout(() => setJustAdded(null), 1200);
  };

  const categories = ['All', 'Hardware', 'DevOps', 'Database', 'Software'];
  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <div className="min-h-full flex flex-col bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950 shadow-md">
              <ShoppingBag className="w-5 h-5 text-slate-950" />
            </div>
            <span className="font-bold text-lg text-white">NextStore</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-sm transition"
            >
              <ShoppingCart className="w-4 h-4 text-sky-400" />
              <span className="font-semibold text-white">{totalCount} items</span>
              <span className="font-mono text-xs text-sky-400 font-bold">(${totalPrice})</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Catalog View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" /> Next.js 15 + PostgreSQL Cart
            </div>
            <h1 className="text-3xl font-extrabold text-white">Developer Hardware & Enterprise Systems</h1>
            <p className="text-slate-400 text-sm mt-1">High-performance tooling with transactional PostgreSQL order fulfillment.</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition flex flex-col justify-between overflow-hidden p-5 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">{p.category}</span>
                  {p.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {p.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-white text-base leading-snug">{p.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xl font-extrabold text-white">${p.price}</div>
                  <div className="text-[11px] text-emerald-400 font-medium">{p.stock} in stock</div>
                </div>

                <button
                  onClick={() => addToCart(p)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    justAdded === p.id
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md'
                  }`}
                >
                  {justAdded === p.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Added
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} NextStore. Engineered with Next.js 15, PostgreSQL transactions, and Supabase Webhooks.
      </footer>
    </div>
  );
}
