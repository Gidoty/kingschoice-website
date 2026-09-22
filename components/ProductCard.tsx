import type { Product } from '@/lib/products';
import WhatsAppButton from './WhatsAppButton';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div>
        <h3 className="text-base font-semibold text-ink">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
      </div>
      <div className="mt-5">
        <WhatsAppButton productName={product.name} full />
      </div>
    </div>
  );
}
