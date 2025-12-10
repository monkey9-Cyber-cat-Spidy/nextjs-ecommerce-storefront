import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'nextjs-ecommerce-storefront',
    timestamp: new Date().toISOString()
  });
}
