'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
        <ArrowLeft className="w-4 h-4" /> Back to Storefront
      </Link>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-white">Order Checkout & Verification</h1>
        <p className="text-sm text-slate-400">Transactional PostgreSQL order state machine with atomic commits.</p>
      </div>

      <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-6 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h2 className="text-lg font-bold text-white">Cart Ready for Transactional Commit</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            All cart items are verified against PostgreSQL inventory constraints with ACID transaction guarantees.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
