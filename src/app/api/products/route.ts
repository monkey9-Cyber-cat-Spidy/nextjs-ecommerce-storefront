import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: '1', name: 'Ultra-Low Latency Audio Streamer', price: 189, category: 'Hardware', rating: 4.9, stock: 12 },
    { id: '2', name: 'Edge Gateway VPS Controller', price: 299, category: 'DevOps', rating: 4.8, stock: 24 },
    { id: '3', name: 'PostgreSQL Vector Accelerator', price: 149, category: 'Database', rating: 5.0, stock: 45 },
    { id: '4', name: 'Enterprise SaaS Starter License', price: 99, category: 'Software', rating: 4.9, stock: 99 },
  ];
  return NextResponse.json(products);
}
